import { ConnectorConstraints } from "@syncfusion/ej2-vue-diagrams";

function getConnectors() {
  let connectorSymbols = [
    {
      id: "Link1",
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
    },
    {
      id: "Link2",
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
    },
    {
      id: "link3",
      type: "Orthogonal",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 2, strokeColor: "#757575" },
      targetDecorator: { shape: "None" },
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
    {
      id: "Link4",
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
      id: "link5",
      type: "Straight",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 2, strokeColor: "#757575" },
      targetDecorator: { shape: "None" },
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
    {
      id: "link6",
      type: "Bezier",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 2, strokeColor: "#757575" },
      targetDecorator: { shape: "None" },
      constraints:
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    },
  ];
  return connectorSymbols;
}

export default getConnectors;
