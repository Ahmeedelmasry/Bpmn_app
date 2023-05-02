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
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
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
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Start Event With Msg",
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
      id: "Start Event With Timer",
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
      id: "Start Event With Escalation",
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
      id: "Start Event With Conditional",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "Conditional",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      height: 60,
      ports: ports,
    },
    {
      id: "Start Event With Link",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "Link",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Start Event With Compensation",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "Compensation",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      height: 60,
      ports: ports,
    },
    {
      id: "Start Event With Intermediate",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "Intermediate",
          trigger: "Signal",
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
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "End Event With Msg",
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
    {
      id: "End Event With Cancel",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "End",
          trigger: "Cancel",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      height: 60,
      ports: ports,
    },
    {
      id: "End Event With Compensation",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "End",
          trigger: "Compensation",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "End Event With Signal",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "End",
          trigger: "Signal",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "End Event With Terminate",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "End",
          trigger: "Terminate",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    // Dotted Shapes
    {
      id: "Non-Interrupting Intermediate With Message",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "NonInterruptingIntermediate",
          trigger: "Message",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Non-Interrupting Intermediate With Timer",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "NonInterruptingIntermediate",
          trigger: "Timer",
        },
      },
      width: 60,
      height: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
    },
    {
      id: "Non-Interrupting Intermediate With Escalation",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "NonInterruptingIntermediate",
          trigger: "Escalation",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
      height: 60,
    },
    {
      id: "Non-Interrupting Intermediate With Conditional",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "NonInterruptingIntermediate",
          trigger: "Conditional",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
      height: 60,
    },
    {
      id: "Non-Interrupting Intermediate With Signal",
      shape: {
        type: "Bpmn",
        shape: "Event",
        event: {
          event: "NonInterruptingIntermediate",
          trigger: "Signal",
        },
      },
      width: 60,
      constraints: NodeConstraints.Default | NodeConstraints.ReadOnly,
      ports: ports,
      height: 60,
    },
  ];

  return events;
}

export default getEventShapes;
