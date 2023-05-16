import vlaidateElement from "@/bpmn_shapes/validation/validateElement.js";
import checkStartEnd from "@/bpmn_shapes/validation/checkStartEnd";

export default function validateDiagram(diagram) {
  let nodes = diagram.nodes;
  // Check If Diagram Has one start and one end
  let hasStart = false;
  let hasEnd = false;
  let multiStart = false;
  let multiEnd = false;
  let hasPool = false;
  let dublicated = false;

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].shape.type == "SwimLane") {
      hasPool = true;
      for (let k = 0; k < nodes.length; k++) {
        if (nodes[k].id != nodes[i].id) {
          let anotherShape = nodes[k];
          if (
            anotherShape.shape.shape == "Event" ||
            anotherShape.shape.shape == "Gateway" ||
            anotherShape.shape.shape == "DataObject" ||
            anotherShape.shape.shape == "DataSource"
          ) {
            dublicated = true;
            break;
          }
          if (
            anotherShape.shape.shape == "Activity" &&
            anotherShape.shape.activity.activity != "SubProcess"
          ) {
            dublicated = true;
            break;
          }
        }
      }
    }
    if (
      nodes[i].shape.shape === "Event" &&
      nodes[i].shape.event.event === "Start"
    ) {
      hasStart = true;
      for (let j = 0; j < nodes.length; j++) {
        if (
          nodes[j].shape.shape === "Event" &&
          nodes[j].shape.event.event === "Start" &&
          nodes[j].id !== nodes[i].id
        ) {
          multiStart = true;
        }
      }
    }
    if (
      nodes[i].shape.shape === "Event" &&
      nodes[i].shape.event.event === "End"
    ) {
      hasEnd = true;
      for (let j = 0; j < nodes.length; j++) {
        if (
          nodes[j].shape.shape === "Event" &&
          nodes[j].shape.event.event === "End" &&
          nodes[j].shape.event.trigger === "None" &&
          nodes[j].id !== nodes[i].id
        ) {
          multiEnd = true;
        }
      }
    }
  }
  // End Check If Diagram Has one start and one end

  let validateErrs = {
    startEv: {
      msg: "",
      showErr: false,
    },
    endEv: {
      msg: "",
      showErr: false,
    },
    gateway: {
      msg: "",
      showErr: false,
    },
    task: {
      msg: "",
      showErr: false,
    },
    dataObject: {
      msg: "",
      showErr: false,
    },
    dataSource: {
      msg: "",
      showErr: false,
    },
    multiStart: {
      msg: "",
      showErr: false,
    },
    multiEnd: {
      msg: "",
      showErr: false,
    },
    dublication: {
      msg: "",
      showErr: false,
    },
    unConnectedArrow: {
      msg: "",
      showErr: false,
    },
    intermediate: {
      msg: "",
      showErr: false,
    },
  };

  if (hasStart && hasEnd && !multiStart && !multiEnd && !hasPool) {
    nodes.map((el) => {
      vlaidateElement(el, validateErrs);
    });
  } else {
    if (dublicated && hasPool) {
      validateErrs.dublication.msg =
        "Can't draw shapes out pool or use more than separated pool";
      validateErrs.dublication.showErr = true;
      return validateErrs;
      /*
       * ============================================
       * ================ Swimlane ==================
       * ============================================
       */
    } else if (!dublicated && hasPool) {
      const lanes = nodes[0].shape.lanes;
      let poolNodes = [];
      lanes.map((el) => {
        el.children.map((child) => poolNodes.push(child));
      });
      // Check If there is a start and end and not repeated
      const { poolStart, poolEnd, poolMultiStart, poolMultiEnd } =
        checkStartEnd(poolNodes);
      if (poolStart && poolEnd && !poolMultiStart && !poolMultiEnd) {
        poolNodes.map((el) => {
          vlaidateElement(el, validateErrs);
        });
      } else {
        validateErrs.startEv.msg = poolStart
          ? ""
          : "Diagram must have a start event";
        validateErrs.startEv.showErr = true;
        validateErrs.endEv.msg = poolEnd
          ? ""
          : "Diagram must have an End event";
        validateErrs.endEv.showErr = true;
        validateErrs.multiStart.msg = !poolMultiStart
          ? ""
          : "Diagram must have only one start event shape";
        validateErrs.multiStart.showErr = true;
        validateErrs.multiEnd.msg = !poolMultiEnd
          ? ""
          : "Diagram must have only one end event shape";
        validateErrs.multiEnd.showErr = true;
      }
      /*
       * ============================================
       * ================ End Swimlane ==============
       * ============================================
       */
    } else {
      validateErrs.startEv.msg = hasStart
        ? ""
        : "Diagram must have a start event";
      validateErrs.startEv.showErr = true;
      validateErrs.endEv.msg = hasEnd ? "" : "Diagram must have an End event";
      validateErrs.endEv.showErr = true;
      validateErrs.multiStart.msg = !multiStart
        ? ""
        : "Diagram must have only one start event shape";
      validateErrs.multiStart.showErr = true;
      validateErrs.multiEnd.msg = !multiEnd
        ? ""
        : "Diagram must have only one end event shape";
      validateErrs.multiEnd.showErr = true;
    }
  }
  if (
    !validateErrs.startEv.msg &&
    !validateErrs.endEv.msg &&
    !validateErrs.gateway.msg &&
    !validateErrs.task.msg &&
    !validateErrs.dataSource.msg &&
    !validateErrs.dataObject.msg &&
    !validateErrs.dublication.msg
  ) {
    let connectorErr = false;
    for (let i = 0; i < diagram.connectors.length; i++) {
      if (!diagram.connectors[i].sourceID || !diagram.connectors[i].targetID) {
        if (
          diagram.connectors[i].targetID &&
          diagram.connectors[i].targetID.substring(0, 10) == "Empty Pool"
        ) {
          console.log("valid");
        } else {
          connectorErr = true;
          break;
        }
      }
    }
    if (connectorErr) {
      validateErrs.unConnectedArrow.msg =
        "A connector must have a source shape and a target shape";
      validateErrs.unConnectedArrow.showErr = true;
    }
  }
  return validateErrs;
}
