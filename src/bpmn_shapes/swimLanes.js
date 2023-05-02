import getPorts from "@/bpmn_shapes/ports";

function getSwimLaneShapes() {
  let ports = getPorts();

  let swimLanes = [
    {
      id: "stackCanvas1",
      shape: {
        type: "SwimLane",
        lanes: [
          {
            id: "lane1",
            style: { strokeColor: "#868686" },
            height: 200,
            width: 800,
            header: {
              width: 50,
              height: 50,
              style: { fontSize: 11, fill: "white", strokeColor: "#868686" },
            },
          },
        ],
        orientation: "Horizontal",
        isLane: true,
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
      ports: ports,
    },
    {
      id: "verticalPhase",
      shape: {
        type: "SwimLane",
        phases: [
          {
            style: {
              strokeWidth: 1,
              strokeDashArray: "3,3",
              strokeColor: "#A9A9A9",
            },
          },
        ],
        annotations: [{ text: "" }],
        orientation: "Vertical",
        isPhase: true,
      },
      height: 60,
      width: 140,
    },
  ];

  return swimLanes;
}

export default getSwimLaneShapes;
