import { NodeConstraints } from "@syncfusion/ej2-vue-diagrams";
import getPorts from "@/bpmn_shapes/ports";

function getEventShapes() {
  let ports = getPorts();
  let events = [
    // Start Events
    {
      id: "Start Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Start",
          trigger: "None",
        },
      },
      width: 60,
      height: 60,
      ports: ports,
    },
    {
      id: "Message Start Event ",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Start",
          trigger: "Message",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      height: 60,
      ports: ports,
    },
    {
      id: "Error Start Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Start",
          trigger: "Error",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Escalation Start Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Start",
          trigger: "Escalation",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Timer Start Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Start",
          trigger: "Timer",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Intermediate Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "None",
        },
      },
      width: 60,
      height: 60,
      ports: ports,
    },
    {
      id: "Message Intermediate Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "Message",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      height: 60,
      ports: ports,
    },
    {
      id: "Timer Intermediate Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "Timer",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Escalation Intermediate Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "Escalation",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Error Intermediate Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "Error",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    // End Events
    {
      id: "End Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "End",
          trigger: "None",
        },
      },
      width: 60,
      height: 60,
      ports: ports,
    },
    {
      id: "Message End Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "End",
          trigger: "Message",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Escalation End Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "End",
          trigger: "Escalation",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Error End Event",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "End",
          trigger: "Error",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
  ];

  return events;
}

export default getEventShapes;
