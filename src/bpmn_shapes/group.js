import { NodeConstraints } from "@syncfusion/ej2-vue-diagrams";

function getGroupShapes() {
  let groupingShapes = [
    {
      id: "Group",
      width: 520,
      height: 250,
      offsetX: 355,
      offsetY: 230,
      constraints:
        NodeConstraints.OutConnect |
        NodeConstraints.ReadOnly |
        NodeConstraints.Drag |
        NodeConstraints.Select |
        NodeConstraints.PointerEvents |
        NodeConstraints.HideThumbs |
        NodeConstraints.Delete |
        NodeConstraints.Resize,
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
    },
  ];

  return groupingShapes;
}

export default getGroupShapes;
