import getPorts from "@/bpmn_shapes/ports";

function getTextShapes() {
  let ports = getPorts();

  let textFeildShapes = [
    {
      id: "Annotation",
      shape: {
        type: "Flow",
        shape: "Annotation",
      },
      width: 20,
      height: 40,
      ports: ports,
    },
  ];
  return textFeildShapes;
}

export default getTextShapes;
