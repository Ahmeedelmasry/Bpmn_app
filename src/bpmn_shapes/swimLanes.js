import { PortVisibility } from "@syncfusion/ej2-vue-diagrams";
let textPorts = [
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
  {
    id: "port5",
    offset: {
      x: 0.25,
      y: 1,
    },
    visibility: PortVisibility.Hidden,
    style: { strokeColor: "#d5d5d5" },
  },
  {
    id: "port6",
    offset: {
      x: 0.75,
      y: 1,
    },
    visibility: PortVisibility.Hidden,
    style: { strokeColor: "#d5d5d5" },
  },
];
function getSwimLaneShapes() {
  let swimLanes = [
    {
      id: "Swim Lane",
      shape: {
        type: "SwimLane",
        orientation: "Horizontal",
        isLane: true,
        lanes: [
          {
            id: "lane1",
            style: { strokeColor: "#868686" },
            height: 200,
            width: 800,
            header: {
              width: 30,
              height: 20,
              style: { fontSize: 11, fill: "white", strokeColor: "#868686" },
            },
          },
        ],
      },
      height: 60,
      width: 140,
      offsetX: 70,
      offsetY: 30,
    },
    {
      id: "Empty Pool",
      width: 250,
      height: 100,
      offsetX: 355,
      offsetY: 230,
      shape: {
        shape: "Activity",
        type: "Bpmn",
        activity: {
          activity: "SubProcess",
          subProcess: {
            type: "Groupd",
            collapsed: false,
          },
        },
      },
      ports: textPorts,
    },
  ];

  return swimLanes;
}

export default getSwimLaneShapes;
