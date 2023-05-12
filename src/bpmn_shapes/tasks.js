import getPorts from "@/bpmn_shapes/ports";

function getTaskShapes() {
  let ports = getPorts();
  let taskShapes = [
    {
      id: "Task",
      shape: {
        type: "Bpmn",
        shape: "Activity",
        activity: {
          activity: "Task",
        },
      },
      width: 90,
      height: 90,
      ports: ports,
    },
    {
      id: "User Task",
      shape: {
        type: "Bpmn",
        shape: "Activity",
        activity: {
          activity: "Task",
          task: {
            type: "User",
          },
        },
      },
      width: 90,
      height: 90,
      ports: ports,
    },
    {
      id: "Service Task",
      shape: {
        type: "Bpmn",
        shape: "Activity",
        activity: {
          activity: "Task",
          task: {
            type: "Service",
          },
        },
      },
      width: 90,
      height: 90,
      ports: ports,
    },
    // {
    //   id: "Business Rule Activity",
    //   shape: {
    //     type: "Bpmn",
    //     shape: "Activity",
    //     activity: {
    //       activity: "Task",
    //       task: {
    //         type: "BusinessRule",
    //       },
    //     },
    //   },
    //   width: 90,
    //   height: 90,
    //   ports: ports,
    // },
    {
      id: "Script Activity",
      shape: {
        type: "Bpmn",
        shape: "Activity",
        activity: {
          activity: "Task",
          task: {
            type: "Script",
          },
        },
      },
      width: 90,
      height: 90,
      ports: ports,
    },
    // {
    //   id: "Collabsed Activity",
    //   shape: {
    //     type: "Bpmn",
    //     shape: "Activity",
    //     activity: {
    //       activity: "SubProcess",
    //       subProcess: {
    //         collapsed: true,
    //       },
    //     },
    //   },
    //   width: 90,
    //   height: 90,
    //   ports: ports,
    // },
  ];

  return taskShapes;
}

export default getTaskShapes;
