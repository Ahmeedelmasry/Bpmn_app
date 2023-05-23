import { ConnectorConstraints } from "@syncfusion/ej2-vue-diagrams";

function getConnectors() {
  let connectorSymbols = [
    {
      id: "sequence Flow",
      type: "Orthogonal",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: {
        shape: "Arrow",
        style: { strokeColor: "#757575", fill: "#757575" },
      },
      style: { strokeWidth: 2, strokeColor: "#757575" },
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
      cornerRadius: 10,
    },
    {
      id: "message Flow",
      type: "Orthogonal",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: {
        shape: "Arrow",
        style: { strokeColor: "#757575", fill: "#757575" },
      },
      style: { strokeWidth: 2, strokeDashArray: "4 4", strokeColor: "#757575" },
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
      cornerRadius: 10,
    },
    {
      id: "Straight sequence Flow",
      type: "Straight",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: {
        shape: "Arrow",
        style: { strokeColor: "#757575", fill: "#757575" },
      },
      style: { strokeWidth: 2, strokeColor: "#757575" },
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
    {
      id: "Straight message Flow",
      type: "Straight",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: {
        shape: "Arrow",
        style: { strokeColor: "#757575", fill: "#757575" },
      },
      style: { strokeWidth: 2, strokeDashArray: "4 4", strokeColor: "#757575" },
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
  ];
  return connectorSymbols;
}

export default getConnectors;
