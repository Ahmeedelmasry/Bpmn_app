import { NodeConstraints } from "@syncfusion/ej2-vue-diagrams";
import getPorts from "@/bpmn_shapes/ports";

function getGroupShapes() {
  let ports = getPorts();

  let groupingShapes = [
    {
      id: "Sub Process",
      width: 520,
      height: 250,
      offsetX: 355,
      offsetY: 230,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      shape: {
        shape: "Activity",
        type: "Bpmn",
        activity: {
          activity: "SubProcess",
          subProcess: {
            type: "NonInterruptingIntermediate",
            collapsed: false,
            processes: [],
            transaction: {
              cancel: { visible: false },
              failure: { visible: false },
              success: { visible: false },
            },
          },
        },
      },
      style: { fill: "transparent" },
      ports: ports,
    },
  ];

  return groupingShapes;
}

export default getGroupShapes;
