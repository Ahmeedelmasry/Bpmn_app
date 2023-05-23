import { NodeConstraints } from "@syncfusion/ej2-vue-diagrams";
import getPorts from "@/bpmn_shapes/ports";

function getGatewayShapes() {
  let ports = getPorts();
  let gatewayShapes = [
    {
      id: "Exclusive Gateway",
      shape: {
        type: "Bpmn",
        shape: "Gateway",
        gateway: {
          type: "Exclusive",
        },
      },
      width: 60,
      ports: ports,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      height: 60,
    },
    {
      id: "Parallel Gateway",
      shape: {
        type: "Bpmn",
        shape: "Gateway",
        gateway: {
          type: "Parallel",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
      height: 60,
    },
    {
      id: "Event Based Gateway",
      shape: {
        type: "Bpmn",
        shape: "Gateway",
        gateway: {
          type: "EventBased",
        },
      },
      width: 60,
      ports: ports,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      height: 60,
    },
  ];

  return gatewayShapes;
}

export default getGatewayShapes;
