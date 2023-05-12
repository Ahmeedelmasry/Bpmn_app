import { NodeConstraints } from "@syncfusion/ej2-vue-diagrams";

function getTextShapes() {
  let textFeildShapes = [
    {
      id: "Annotation",
      shape: {
        type: "Text",
        content: "Text",
      },
      //Customizes the appearances such as text, font, fill, and stroke.
      style: {
        strokeColor: "none",
        // fill: "#efefefa3",
        fill: "none",
        color: "black",
        textAlign: "Center",
      },
      width: 80,
      height: 40,
      constraints:
        NodeConstraints.OutConnect |
        NodeConstraints.Drag |
        NodeConstraints.Select |
        NodeConstraints.PointerEvents |
        NodeConstraints.HideThumbs |
        NodeConstraints.Delete,
    },
  ];
  return textFeildShapes;
}

export default getTextShapes;
