export default function vlaidateElement(el, validateErrs) {
  let type;
  let event;
  // Get Shape Type And Event
  if (el.shape.shape === "Event") {
    type = el.shape.shape;
    event = el.shape.event.event;
  }
  if (el.shape.shape === "Gateway") {
    type = el.shape.shape;
    event = el.shape.shape;
  }
  if (el.shape.shape === "Activity") {
    if (el.shape.activity.activity !== "SubProcess") {
      type = el.shape.shape;
      event = el.shape.activity.activity;
    }
  }
  if (el.shape.shape === "DataObject" || el.shape.shape === "DataSource") {
    type = el.shape.shape;
    event = el.shape.shape;
  }

  /*=== Start Checking ===*/
  //Check If It Is Start Event
  if (type === "Event" && event === "Start") {
    if (el.inEdges.length) {
      validateErrs.startEv.msg = "Start event must have no predecessors";
      validateErrs.startEv.showErr = true;
    } else {
      if (el.outEdges.length) {
        if (el.outEdges.length > 1) {
          validateErrs.startEv.msg = "Start event must have only one successor";
          validateErrs.startEv.showErr = true;
        }
      } else {
        validateErrs.startEv.msg = "Start event must have a successor";
        validateErrs.startEv.showErr = true;
      }
    }
  }
  // Check If It is intermediate
  if (type === "Event" && event === "Intermediate") {
    if (el.inEdges.length) {
      if (el.inEdges.length > 1) {
        validateErrs.intermediate.msg =
          "Intermediate Should Have Only One Predecessor";
        validateErrs.intermediate.showErr = true;
      } else {
        if (el.outEdges.length) {
          if (el.outEdges.length > 1) {
            validateErrs.intermediate.msg =
              "Intermediate Should Have Only One successor";
            validateErrs.intermediate.showErr = true;
          }
        } else {
          validateErrs.intermediate.msg =
            "Intermediate Should Have One successor";
          validateErrs.intermediate.showErr = true;
        }
      }
    } else {
      if (el.outEdges.length) {
        validateErrs.intermediate.msg =
          "Intermediate Should Have One Predecessor";
        validateErrs.intermediate.showErr = true;
      }
    }
  }
  // If It Is End Event
  if (type === "Event" && event === "End") {
    if (el.outEdges.length) {
      validateErrs.endEv.msg = "End event must have no successor";
      validateErrs.endEv.showErr = true;
    } else {
      if (el.inEdges.length) {
        if (el.inEdges.length > 1) {
          validateErrs.endEv.msg = "End event must have only one predecessor";
          validateErrs.endEv.showErr = true;
        }
      } else {
        validateErrs.endEv.msg = "End event must have a predecessor";
        validateErrs.endEv.showErr = true;
      }
    }
  }
  //3- If It Is Gateway
  if (type === "Gateway" && event === "Gateway") {
    if (!el.inEdges.length) {
      validateErrs.gateway.msg = "Gateway Must have at least one predecessor";
      validateErrs.gateway.showErr = true;
    } else {
      if (el.inEdges.length == 1) {
        if (!el.outEdges.length || el.outEdges.length < 2) {
          validateErrs.gateway.msg =
            "Split Gateway Must have two or more successors";
          validateErrs.gateway.showErr = true;
        }
      } else {
        if (!el.outEdges.length || el.outEdges.length > 1) {
          validateErrs.gateway.msg =
            "Merge Gateway Must have Only One successor";
          validateErrs.gateway.showErr = true;
        }
      }
    }
  }
  //4- If It Is Activity
  if (type === "Activity" && event === "Task") {
    if (!el.inEdges.length) {
      validateErrs.task.msg = "Task Must have One Predecessor";
      validateErrs.task.showErr = true;
    } else {
      if (el.inEdges.length > 1) {
        validateErrs.task.msg = "Task Must have only One Predecessor";
        validateErrs.task.showErr = true;
      } else {
        if (!el.outEdges.length) {
          validateErrs.task.msg = "Task Must have One Successor";
          validateErrs.task.showErr = true;
        } else {
          if (el.outEdges.length > 1) {
            validateErrs.task.msg = "Task Must have only One Successor";
            validateErrs.task.showErr = true;
          }
        }
      }
    }
  }
  //5- If It Is Data Object
  if (type === "DataObject" && event === "DataObject") {
    if (!el.inEdges.length) {
      if (!el.outEdges.length) {
        validateErrs.dataObject.msg =
          "DataObject Must have at least one input or one output";
        validateErrs.dataObject.showErr = true;
      }
      if (el.outEdges.length > 1) {
        validateErrs.dataObject.msg =
          "DataObject with output Must have only one output";
        validateErrs.dataObject.showErr = true;
      }
    } else {
      if (el.inEdges.length > 1) {
        validateErrs.dataObject.msg =
          "DataObject with input Must have only one input";
        validateErrs.dataObject.showErr = true;
      } else {
        if (el.outEdges.length > 1) {
          validateErrs.dataObject.msg =
            "DataObject with output Must have only one output";
          validateErrs.dataObject.showErr = true;
        }
      }
    }
  }
  //5- If It Is Data Source
  if (type === "DataSource" && event === "DataSource") {
    if (!el.inEdges.length) {
      if (!el.outEdges.length) {
        validateErrs.dataSource.msg =
          "DataSource Must have at least one input or one output";
        validateErrs.dataSource.showErr = true;
      }
      if (el.outEdges.length > 1) {
        validateErrs.dataSource.msg =
          "DataSource with output Must have only one output";
        validateErrs.dataSource.showErr = true;
      }
    } else {
      if (el.inEdges.length > 1) {
        validateErrs.dataSource.msg =
          "DataSource with input Must have only one input";
        validateErrs.dataSource.showErr = true;
      } else {
        if (el.outEdges.length > 1) {
          validateErrs.dataSource.msg =
            "DataSource with output Must have only one output";
          validateErrs.dataSource.showErr = true;
        }
      }
    }
  }
}
