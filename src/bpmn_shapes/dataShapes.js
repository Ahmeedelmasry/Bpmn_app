import getPorts from "@/bpmn_shapes/ports";

function getDataShapes() {
  let ports = getPorts();

  let dataShapes = [
    {
      id: "Data Object",
      shape: {
        type: "Bpmn",
        shape: "DataObject",
      },
      width: 60,
      ports: ports,
      height: 60,
    },
    {
      id: "Data Source",
      shape: {
        type: "Bpmn",
        shape: "DataSource",
        dataObject: {
          collection: true,
          type: "Input",
        },
      },
      width: 60,
      ports: ports,
      height: 60,
    },
  ];

  return dataShapes;
}
export default getDataShapes;
