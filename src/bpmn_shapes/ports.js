import { PortVisibility } from "@syncfusion/ej2-vue-diagrams";

function getPorts() {
  let ports = [
    {
      id: "port1",
      offset: {
        x: 0,
        y: 0.5,
      },
      visibility: PortVisibility.Hidden,
      style: { strokeColor: "#d5d5d5" },
    },
    {
      id: "port2",
      offset: {
        x: 1,
        y: 0.5,
      },
      visibility: PortVisibility.Hidden,
      style: { strokeColor: "#d5d5d5" },
    },
    {
      id: "port3",
      offset: {
        x: 0.5,
        y: 0,
      },
      visibility: PortVisibility.Hidden,
      style: { strokeColor: "#d5d5d5" },
    },
    {
      id: "port4",
      offset: {
        x: 0.5,
        y: 1,
      },
      visibility: PortVisibility.Hidden,
      style: { strokeColor: "#d5d5d5" },
    },
  ];

  return ports;
}

export default getPorts;
