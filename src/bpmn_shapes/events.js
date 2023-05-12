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
      id: "Start Event With Message",
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
      id: "Start Event With Error",
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
      id: "Start Event With Escalation",
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
      id: "Start Event With Timer",
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
      id: "Intermediate Event With Message",
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
      id: "Intermediate Event With Timer",
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
      id: "Intermediate Event With Escalation",
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
      id: "Intermediate Event With Error",
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
      id: "End Event With Message",
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
      id: "End Event With Escalation",
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
      id: "End Event With Error",
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
