// Get Event Shapes
import getEventShapes from "@/bpmn_shapes/events";
// Get Gateway Shapes
import getGatewayShapes from "@/bpmn_shapes/gateway";
// Get Tasks Shapes
import getTaskShapes from "@/bpmn_shapes/tasks";
// Get Data Shapes
import getDataShapes from "@/bpmn_shapes/dataShapes";
// Get Group Shapes
import getGroupShapes from "@/bpmn_shapes/group";
// Get Text Shapes
import getTextShapes from "@/bpmn_shapes/text";
// Get Text Shapes
import getSwimLaneShapes from "@/bpmn_shapes/swimLanes";
// Get Connectors Shapes
import getConnectors from "@/bpmn_shapes/connectors";

// Declare Event Shapes
let eventShapes = getEventShapes();

// Declare Gateway Shapes
let gatewayShapes = getGatewayShapes();

// Declare Task Shapes
let taskShapes = getTaskShapes();

// Declare Data Shapes
let dataShapes = getDataShapes();

// Declare Group Shapes
let groupingShapes = getGroupShapes();

// Declare Text Shapes
let textFeildShapes = getTextShapes();

// Declare Text Shapes
let swimLanes = getSwimLaneShapes();

function getPaletts() {
  return [
    {
      id: "event",
      expanded: true,
      symbols: eventShapes,
      iconCss: "shapes",
      title: "Events",
    },
    {
      id: "gateway",
      expanded: false,
      symbols: gatewayShapes,
      iconCss: "shapes",
      title: "Gateway",
    },
    {
      id: "activities",
      expanded: false,
      symbols: taskShapes,
      iconCss: "shapes",
      title: "Tasks",
    },
    {
      id: "documents",
      expanded: false,
      symbols: dataShapes,
      iconCss: "shapes",
      title: "Data",
    },
    {
      id: "pool",
      expanded: false,
      symbols: groupingShapes,
      iconCss: "shapes",
      title: "Group",
    },
    {
      id: "textFeilds",
      expanded: false,
      symbols: textFeildShapes,
      iconCss: "shapes",
      title: "Add Text",
    },
    {
      id: "swimLanes",
      expanded: false,
      symbols: swimLanes,
      iconCss: "shapes",
      title: "Swim Lanes",
    },
    {
      id: "connectors",
      expanded: false,
      symbols: getConnectors(),
      iconCss: "shapes",
      title: "Connectors",
    },
  ];
}

export default getPaletts;
