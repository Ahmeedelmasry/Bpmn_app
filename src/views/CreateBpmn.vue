<template>
  <v-app class="control-section">
    <div style="width: 100%; height: 545px">
      <div
        id="palette-space"
        :style="`width: 170px; height: 545px; float: left`"
      >
        <ejs-symbolpalette
          id="symbolpalette"
          :expandMode="expandMode"
          :palettes="palettes"
          :width="palettewidth"
          :height="paletteheight"
          :getSymbolInfo="getSymbolInfo"
          :symbolMargin="symbolMargin"
          :symbolHeight="symbolHeight"
          :symbolWidth="symbolWidth"
          :getNodeDefaults="palettegetNodeDefaults"
        ></ejs-symbolpalette>
      </div>

      <div
        id="diagram-space"
        style="
          width: calc(100% - 170px);
          height: 500px;
          float: left;
          border-color: rgba(0, 0, 0, 0.12);
          border-width: 1px 1px 0px 0px;
          border-style: solid;
          border-left: none;
        "
      >
        <ejs-diagram
          style="display: block"
          ref="diagramObject"
          id="diagram"
          :mode="mode"
          width="100%"
          :height="height"
          :nodes="nodes"
          :connectors="connectors"
          :dragEnter="dragEnter"
          :rulerSettings="rulerSettings"
        ></ejs-diagram>
      </div>
    </div>

    <!-- All Btns Parent -->
    <div
      class="btns"
      style="
        position: fixed;
        right: 10px;
        width: 40px;
        height: 90%;
        bottom: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <!-- Keyboard Parent -->
      <div
        class="top-btn"
        style="
          border: 1px solid lightgray;
          background-color: white;
          opacity: 0.3;
          transition: 0.1s all;
          border-radius: 7px;
          padding: 10px 0;
        "
      >
        <v-icon @click="openKeyboard = !openKeyboard"
          >mdi-keyboard-outline</v-icon
        >
      </div>

      <!-- Bottom Btns Parent -->
      <div
        class="bottom-btns d-flex"
        style="
          display: flex;
          flex-direction: column;
          gap: 20px;
          border: 1px solid lightgray;
          background-color: white;
          opacity: 0.3;
          transition: 0.1s all;
          border-radius: 7px;
          padding: 10px 0;
        "
      >
        <v-icon @click="zoomIn">mdi-magnify-plus-outline</v-icon>
        <v-icon @click="zoomOut">mdi-magnify-minus-outline</v-icon>
        <v-icon @click="undoAction">mdi-undo</v-icon>
        <v-icon @click="redoAction">mdi-redo</v-icon>
        <v-icon @click="recenterDiagram">mdi-aspect-ratio</v-icon>
        <v-icon @click="deleteAll">mdi-delete-outline</v-icon>
      </div>
    </div>
    <!-- Keyboard Shortcuts Popup -->
    <KeyboardShortcuts
      @close_popup="openKeyboard = !openKeyboard"
      v-if="openKeyboard"
    />
  </v-app>
</template>

<script>
import Vue from "vue";
// Import Shortcuts Component
import KeyboardShortcuts from "@/components/KeyboardShortcuts.vue";

// Import Diagram Functions And Classes(Configration)
import {
  DiagramPlugin,
  UndoRedo,
  SymbolPalettePlugin,
  BpmnDiagrams,
  DataBinding,
  ConnectorEditing,
  Diagram,
} from "@syncfusion/ej2-vue-diagrams";

// Get Paletts Shapes
import getPaletts from "@/bpmn_shapes/paletts";
// Drag Enter Function
import dragEnter from "@/bpmn_shapes/dragEnter";

// Diagram Variabls
let diagram;
let nodes = [];
let connectors = [];

// Intialize Diagram Plugin
Diagram.Inject(ConnectorEditing);
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);

export default Vue.extend({
  components: { KeyboardShortcuts },
  data: function () {
    return {
      openKeyboard: false,
      height: "110%",
      mode: "SVG",
      nodes: nodes,
      connectors: connectors,
      rulerSettings: {
        showRulers: true,
      },
      dragEnter: dragEnter,
      expandMode: "Multiple",
      palettes: getPaletts(),
      palettewidth: "550",
      paletteheight: "600px",
      palettegetNodeDefaults: (symbol) => {
        symbol.style = { strokeColor: "#757575" };
      },
      symbolHeight: 60,
      symbolWidth: 60,
      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
      getSymbolInfo: () => {
        return { fit: true };
      },
    };
  },
  provide: {
    diagram: [BpmnDiagrams, UndoRedo, DataBinding],
    SymbolPalette: [BpmnDiagrams, DataBinding],
  },
  mounted: function () {
    this.height = window.innerHeight - 20;
    this.paletteheight = window.innerHeight - 20 + "px";
    diagram = this.$refs.diagramObject.ej2Instances;
    diagram.fitToPage();
  },
  methods: {
    undoAction() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      diagramInstance = diagramObj.ej2_instances[0];
      diagramInstance.undo();
    },
    redoAction() {
      let diagramInstance;
      let diagramObj = document.getElementById("diagram");
      // console.log(diagramObj.ej2_instances);
      diagramInstance = diagramObj.ej2_instances[0];
      // Reverts the last action performed
      diagramInstance.redo();
    },
    zoomIn() {
      //zoomIn option is used to zoom in the diagram
      let zoomin = { type: "ZoomIn", zoomFactor: 0.2 };
      diagram.zoomTo(zoomin);
    },
    zoomOut() {
      //zoomIn option is used to zoom in the diagram
      let zoomout = { type: "ZoomOut", zoomFactor: 0.2 };
      diagram.zoomTo(zoomout);
    },
    recenterDiagram() {
      diagram.reset();
      diagram.fitToPage();
    },
    deleteAll() {
      diagram.clear();
    },
  },
});
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-base/styles/fabric.css";

@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/fabric.css";

@import "../../node_modules/@syncfusion/ej2-diagrams/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-diagrams/styles/fabric.css";

@import "../../node_modules/@syncfusion/ej2-icons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-icons/styles/fabric.css";

@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/fabric.css";

@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/fabric.css";

@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/fabric.css";

@import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-diagrams/styles/fabric.css";

.e-bpmn-icons {
  font-family: "e-bpmn-icons" !important;
  speak: none;
  font-size: 55px;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.e-Order:before {
  content: "\e700";
}

.e-InBOCatchMessage:before {
  content: "\e701";
}

.e-NoneEnd:before {
  content: "\e723";
}

.e-DataObjectCollection:before {
  content: "\e703";
}

.e-DataOutput:before {
  content: "\e704";
}

.e-EscalationEnd:before {
  content: "\e705";
}

.e-Activity:before {
  content: "\e706";
}

.e-EventBasedGateway:before {
  content: "\e714";
}

.e-CatchParallelMultiple:before {
  content: "\e708";
}

.e-CatchMultipleIn:before {
  content: "\e709";
}

.e-BoCatchCompensation:before {
  content: "\e70a";
}

.e-TimerIntermediate:before {
  content: "\e70b";
}

.e-UserCall:before {
  content: "\e70c";
}

.e-NonInBoCatchParallelMultiple:before {
  content: "\e70d";
}

.e-NonInBoTimerIntermediate:before {
  content: "\e70e";
}

.e-ParallelEventBasedGatewaytostart:before {
  content: "\e718";
}

.e-NonInMultiple:before {
  content: "\e710";
}

.e-CompensationEnd:before {
  content: "\e711";
}

.e-InError:before {
  content: "\e70f";
}

.e-NonCatchMultipleIn:before {
  content: "\e713";
}

.e-InCompensation:before {
  content: "\e722";
}

.e-NonInEscalation:before {
  content: "\e716";
}

.e-ThrowMultipleIn:before {
  content: "\e717";
}

.e-InMessage:before {
  content: "\e715";
}

.e-NonInThrowMessage:before {
  content: "\e719";
}

.e-EvBaseGateTostartProcess:before {
  content: "\e71a";
}

.e-InterruptingNone:before {
  content: "\e711";
}

.e-DataOutputCollection:before {
  content: "\e71c";
}

.e-ThrowEscalationIn:before {
  content: "\e71d";
}

.e-ExclusiveGatewayWithMarker:before {
  content: "\e70d";
}

.e-ErrorEnd:before {
  content: "\e71f";
}

.e-ComplexGateway:before {
  content: "\e707";
}

.e-NonInParallelMultiple:before {
  content: "\e721";
}

.e-InSignal:before {
  content: "\e705";
}

.e-NonInBoCatchEscalation:before {
  content: "\e723";
}

.e-InclusiveGateway:before {
  content: "\e71e";
}

.e-MultipleEnd:before {
  content: "\e725";
}

.e-ThrowLinkin:before {
  content: "\e70c";
}

.e-ParallelGateway:before {
  content: "\e729";
}

.e-SignalEnd:before {
  content: "\e728";
}

.e-TerminateEnd:before {
  content: "\e714";
}

.e-BoCatchCompensationIn:before {
  content: "\e72a";
}

.e-InTimer:before {
  content: "\e720";
}

.e-ThrowCompensationIn:before {
  content: "\e72c";
}

.e-InConditional:before {
  content: "\e728";
}

.e-ScriptCall:before {
  content: "\e713";
}

.e-BoCatchCancelIn:before {
  content: "\e72f";
}

.e-ThrowMessage:before {
  content: "\e730";
}

.e-CatchLinkIn:before {
  content: "\e731";
}

.e-Gateway:before {
  content: "\e732";
}

.e-DataInputCollection:before {
  content: "\e733";
}

.e-NonInSignal:before {
  content: "\e734";
}

.e-DataInput:before {
  content: "\e70c";
}

.e-InMultiple:before {
  content: "\e710";
}

.e-InEscalation:before {
  content: "\e71a";
}

.e-CancelEnd:before {
  content: "\e717";
}

.e-DataObject:before {
  content: "\e739";
}

.e-NonInBOCatchMessage:before {
  content: "\e73a";
}

.e-ManualCall:before {
  content: "\e725";
}

.e-InParallelMultiple:before {
  content: "\e727";
}

.e-Flow:before {
  content: "\e73d";
}

.e-DataStore:before {
  content: "\e73e";
}

.e-NoneStart:before {
  content: "\e71f";
}

.e-ServiceTask:before {
  content: "\e719";
}

.e-InBoCatchEscalation:before {
  content: "\e741";
}

.e-NonInConditional:before {
  content: "\e742";
}

.e-BusinessRule:before {
  content: "\e712";
}

.e-NonInTimer:before {
  content: "\e744";
}

.e-MessageEnd:before {
  content: "\e745";
}

.e-None:before {
  content: "\e726";
}

.e-SequentialMI:before {
  content: "\e71d";
}

.e-ParallelMI:before {
  content: "\e70a";
}

.e-Loop:before {
  content: "\e70e";
}

.e-Compensation:before {
  content: "\e722";
}

.e-SubProcess:before {
  content: "\e700";
}

.e-Task:before {
  content: "\e71b";
}

.e-Call:before {
  content: "\e70b";
}

.e-adhoc:before {
  content: "\e709";
}

.e-Default:before {
  content: "\e71b";
}

.e-Event:before {
  content: "\e708";
}

.e-CallActivity:before {
  content: "\e701";
}

.e-ExclusiveEventBased:before {
  content: "\e71c";
}

.e-Noninterruptingstart:before {
  content: "\e72b";
}

.e-NoninterruptingIntermediate:before {
  content: "\e72a";
}

.e-InstantiatingReceive:before {
  content: "\e72c";
}

.container-fluid {
  padding-bottom: 15px;
}

/* Start Customization */

#diagramcontent {
  overflow: hidden !important;
  border: 1px solid rgb(123, 123, 123);
}
#diagram_diagramLayer_svg {
  background-color: white;
}
#symbolpalette::-webkit-scrollbar {
  width: 5px !important;
}
#symbolpalette::-webkit-scrollbar-track {
  width: 5px !important;
  background-color: rgb(228, 227, 227) !important;
}
#symbolpalette::-webkit-scrollbar-thumb {
  width: 5px !important;
  background-color: rgb(200, 200, 200) !important;
}
.bottom-btns:hover,
.top-btn:hover {
  opacity: 1 !important;
}
.v-icon::after {
  display: none !important;
}
#symbolpalette {
  border-right: 1px solid darkgray;
  background: white;
}
.v-overlay {
  position: absolute;
}

/* Media Queries */
@media (max-width: 600px) {
  #diagram {
    width: calc(100% + 242px) !important;
  }
  #palette-space {
    position: absolute !important;
    z-index: 10;
    transform: translateX(-80%);
    transition: 0.2s all ease-in-out;
  }
  #palette-space:hover {
    transform: translateX(0%);
  }
}
</style>
