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
        >
        </ejs-symbolpalette>
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
          class="position-relative"
          :mode="mode"
          width="100%"
          :height="height"
          :nodes="nodes"
          :connectors="connectors"
          :dragEnter="dragEnter"
          :selectionChange="selectionChange"
          :rulerSettings="rulerSettings"
          :constraints="constraints"
          :enableConnectorSplit="enableConnectorSplit"
          :commandManager="commandManager"
        >
          <!-- Alerts Div -->
          <div
            class="alerts"
            style="
              position: absolute;
              top: 0;
              z-index: 1000;
              width: 100%;
              background: white;
              box-shadow: 0px 0px 9px -5px black;
            "
          >
            <div class="alert-parent" v-for="(err, i) in validateErrs" :key="i">
              <v-alert
                v-if="err.msg"
                dense
                outlined
                type="error"
                border="left"
                dark
                dismissible
                v-model="err.showErr"
              >
                <strong>{{ err.msg }}</strong>
              </v-alert>
            </div>
          </div>
          <!-- Alerts Div -->

          <!-- Show Selected Data -->
          <div
            class="show_selected_data text-center"
            :style="`${
              selectedObject.item.shape ? 'display: block' : 'display: none'
            }`"
          >
            <v-container class="pb-0">
              <h5
                style="
                  margin: auto;
                  width: fit-content;
                  text-decoration: underline;
                  margin-bottom: 10px;
                "
              >
                Item Properties
              </h5>
              <v-row
                style="
                  font-size: 16px;
                  font-weight: 500;
                  justify-content: center;
                "
              >
                <v-col cols="2 d-none d-md-block"></v-col>
                <v-col cols="6" md="4" style="margin-top: 0 !important">
                  <v-card
                    class="text-start"
                    style="box-shadow: unset !important"
                  >
                    <!-- Events -->
                    <div
                      class="div"
                      v-if="
                        selectedObject.item.shape &&
                        selectedObject.item.shape.shape == 'Event'
                      "
                    >
                      <p>Item Type: {{ selectedObject.item.shape.shape }}</p>
                      <p>
                        Item Name:
                        {{
                          selectedObject.item.shape.event.trigger !== "None"
                            ? selectedObject.item.shape.event.trigger
                            : ""
                        }}
                        {{ selectedObject.item.shape.event.event }}
                        {{ selectedObject.item.shape.shape }}
                      </p>
                    </div>
                    <!-- Gateways -->
                    <div
                      class="div"
                      v-else-if="
                        selectedObject.item.shape &&
                        selectedObject.item.shape.shape == 'Gateway'
                      "
                    >
                      <p>Item Type: {{ selectedObject.item.shape.shape }}</p>
                      <p>
                        Item Name: {{ selectedObject.item.shape.gateway.type }}
                        {{ selectedObject.item.shape.shape }}
                      </p>
                    </div>
                    <!-- Tasks -->
                    <div
                      class="div"
                      v-else-if="
                        selectedObject.item.shape &&
                        selectedObject.item.shape.shape == 'Activity'
                      "
                    >
                      <p>Item Type: Activity</p>
                      <p>
                        Item Name:
                        {{
                          selectedObject.item.shape.activity.task.type !==
                          "None"
                            ? selectedObject.item.shape.activity.task.type
                            : ""
                        }}
                        Task
                      </p>
                    </div>
                    <!-- Data -->
                    <div
                      class="div"
                      v-else-if="
                        selectedObject.item.shape &&
                        (selectedObject.item.shape.shape == 'DataObject' ||
                          selectedObject.item.shape.shape == 'DataSource')
                      "
                    >
                      <p>Item Type: Data</p>
                      <p>Item Name: {{ selectedObject.item.shape.shape }}</p>
                    </div>
                    <!-- If No Selected item -->
                    <div v-else>
                      <p>No Selected Item</p>
                    </div>
                    <!-- End Of Selected Item -->
                  </v-card>
                </v-col>
                <v-col cols="6" md="3" class="text-start">
                  <v-card
                    class="pb-5 pl-7"
                    style="box-shadow: unset !important"
                  >
                    <v-row style="color: #716f6f !important">
                      <!-- Predecessors -->
                      <v-col cols="12 pa-0 pt-3">
                        Predecessors:
                        <v-menu v-if="selectedObject.pre.length" top>
                          <template v-slot:activator="{ attrs, on }">
                            <v-icon
                              class="white--text ma-0"
                              v-bind="attrs"
                              v-on="on"
                              color="blue"
                            >
                              mdi-chevron-down
                            </v-icon>
                          </template>

                          <v-list>
                            <v-list-item
                              link
                              v-for="(predecessor, i) in selectedObject.pre"
                              :key="predecessor.id"
                            >
                              <v-list-item-title>
                                <!-- Events -->
                                <div
                                  class="div"
                                  v-if="
                                    predecessor.shape &&
                                    predecessor.shape.shape == 'Event'
                                  "
                                >
                                  <p>
                                    {{ i + 1 }}- Item Name:
                                    {{
                                      predecessor.shape.event.trigger !== "None"
                                        ? predecessor.shape.event.trigger
                                        : ""
                                    }}
                                    {{ predecessor.shape.event.event }}
                                    {{ predecessor.shape.shape }}
                                  </p>
                                </div>
                                <!-- Gateways -->
                                <div
                                  class="div"
                                  v-if="
                                    predecessor.shape &&
                                    predecessor.shape.shape == 'Gateway'
                                  "
                                >
                                  <p>
                                    {{ i + 1 }}- Item Name:
                                    {{ predecessor.shape.gateway.type }}
                                    {{ predecessor.shape.shape }}
                                  </p>
                                </div>
                                <!-- Tasks -->
                                <div
                                  class="div"
                                  v-if="
                                    predecessor.shape &&
                                    predecessor.shape.shape == 'Activity'
                                  "
                                >
                                  <p>
                                    {{ i + 1 }}- Item Name:
                                    {{
                                      predecessor.shape.activity.task.type !==
                                      "None"
                                        ? predecessor.shape.activity.task.type
                                        : ""
                                    }}
                                    Task
                                  </p>
                                </div>
                                <!-- Data -->
                                <div
                                  class="div"
                                  v-if="
                                    predecessor.shape &&
                                    (predecessor.shape.shape == 'DataObject' ||
                                      predecessor.shape.shape == 'DataSource')
                                  "
                                >
                                  <p>
                                    {{ i + 1 }}- Item Name:
                                    {{ predecessor.shape.shape }}
                                  </p>
                                </div>
                              </v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                        <span v-else>
                          <span>No Predecessors</span>
                        </span>
                      </v-col>
                      <!-- Successors -->
                      <v-col cols="12" class="pa-0 mb-3">
                        Successors:
                        <v-menu v-if="selectedObject.after.length" top>
                          <template v-slot:activator="{ attrs, on }">
                            <v-icon
                              class="white--text ma-0"
                              v-bind="attrs"
                              v-on="on"
                              color="blue"
                            >
                              mdi-chevron-down
                            </v-icon>
                          </template>

                          <v-list>
                            <v-list-item
                              link
                              v-for="(successor, i) in selectedObject.after"
                              :key="successor.id"
                            >
                              <v-list-item-title>
                                <!-- Events -->
                                <div
                                  class="div"
                                  v-if="
                                    successor.shape &&
                                    successor.shape.shape == 'Event'
                                  "
                                >
                                  <p>
                                    {{ i + 1 }}- Item Name:
                                    {{
                                      successor.shape.event.trigger !== "None"
                                        ? successor.shape.event.trigger
                                        : ""
                                    }}
                                    {{ successor.shape.event.event }}
                                    {{ successor.shape.shape }}
                                  </p>
                                </div>
                                <!-- Gateways -->
                                <div
                                  class="div"
                                  v-if="
                                    successor.shape &&
                                    successor.shape.shape == 'Gateway'
                                  "
                                >
                                  <p>
                                    {{ i + 1 }}- Item Name:
                                    {{ successor.shape.gateway.type }}
                                    {{ successor.shape.shape }}
                                  </p>
                                </div>
                                <!-- Tasks -->
                                <div
                                  class="div"
                                  v-if="
                                    successor.shape &&
                                    successor.shape.shape == 'Activity'
                                  "
                                >
                                  <p>
                                    {{ i + 1 }}- Item Name:
                                    {{
                                      successor.shape.activity.task.type !==
                                      "None"
                                        ? successor.shape.activity.task.type
                                        : ""
                                    }}
                                    Task
                                  </p>
                                </div>
                                <!-- Data -->
                                <div
                                  class="div"
                                  v-if="
                                    successor.shape &&
                                    (successor.shape.shape == 'DataObject' ||
                                      successor.shape.shape == 'DataSource')
                                  "
                                >
                                  <p>
                                    {{ i + 1 }}- Item Name:
                                    {{ successor.shape.shape }}
                                  </p>
                                </div>
                              </v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                        <span v-else>
                          <span>No Successors</span>
                        </span>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <v-col cols="2 d-none d-md-block"></v-col>
              </v-row>
            </v-container>
          </div>
        </ejs-diagram>
      </div>
    </div>
    <!-- Success Popup -->
    <SuccessPopup
      :showSuccessPopup="showSuccessPopup"
      @closePopupEmit="showSuccessPopup = false"
      @doDownload="downloadDiagram"
      @doUpload="uploadDiagram"
      popupType="upload"
    />
    <!-- Success Popup -->

    <!-- Upload Popup -->
    <UploadPopup
      v-if="showUploadPopup"
      @closeSavedPopup="closeUploadPopup"
      :theDiagram="theDiagram"
    />
    <!-- Upload Popup -->

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
        z-index: 1;
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
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              @click="openKeyboard = !openKeyboard"
              v-bind="attrs"
              v-on="on"
              >mdi-keyboard-outline</v-icon
            >
          </template>
          <span>Keyboard Shortcuts</span>
        </v-tooltip>

        <div style="margin-top: 20px">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                @click="$router.push({ name: 'myDiagrams' })"
                v-bind="attrs"
                v-on="on"
                >mdi-shape</v-icon
              >
            </template>
            <span>My Saved Diagrams</span>
          </v-tooltip>
        </div>

        <div style="margin-top: 20px">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                @click="$router.push({ name: 'home' })"
                v-bind="attrs"
                v-on="on"
                >mdi-home-city</v-icon
              >
            </template>
            <span>Home Page</span>
          </v-tooltip>
        </div>
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
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon @click="zoomIn" v-bind="attrs" v-on="on"
              >mdi-magnify-plus-outline
            </v-icon>
          </template>
          <span>Zoom In</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon @click="zoomOut" v-bind="attrs" v-on="on"
              >mdi-magnify-minus-outline
            </v-icon>
          </template>
          <span>Zoom Out</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon @click="recenterDiagram" v-bind="attrs" v-on="on"
              >mdi-aspect-ratio</v-icon
            >
          </template>
          <span>Recenter</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon @click="undoAction" v-bind="attrs" v-on="on"
              >mdi-undo</v-icon
            >
          </template>
          <span>Undo</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon @click="redoAction" v-bind="attrs" v-on="on"
              >mdi-redo</v-icon
            >
          </template>
          <span>Redo</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon @click="selectAll" v-bind="attrs" v-on="on"
              >mdi-select</v-icon
            >
          </template>
          <span>Select All</span>
        </v-tooltip>
        <v-tooltip left v-if="allSelectedItems.length">
          <template v-slot:activator="{ on, attrs }">
            <v-icon @click="deleteSelectedItems" v-bind="attrs" v-on="on"
              >mdi-delete-outline</v-icon
            >
          </template>
          <span>Clear</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="green" @click="validate" v-bind="attrs" v-on="on"
              >mdi-check</v-icon
            >
          </template>
          <span>Validate</span>
        </v-tooltip>
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
  ConnectorBridging,
  DiagramConstraints,
  Keys,
  PrintAndExport,
} from "@syncfusion/ej2-vue-diagrams";

// Get Paletts Shapes
import getPaletts from "@/bpmn_shapes/paletts";

//Get Selection Function
import selectItem from "@/bpmn_shapes/shapeSelecttions/shapeSelect";

// Get Validation Function
import validateDiagram from "@/bpmn_shapes/validation/validationMain";

// Get Success Validation Popup
import SuccessPopup from "@/components/SuccessPopup.vue";

// Get Success Upload Popup
import UploadPopup from "@/components/UploadDiagram.vue";

// Diagram Variabls
let diagram;
let nodes = [];
let connectors = [];

// Intialize Diagram Plugin
Diagram.Inject(ConnectorEditing);
Diagram.Inject(ConnectorBridging);
Diagram.Inject(PrintAndExport);
Vue.use(DiagramPlugin);
Vue.use(SymbolPalettePlugin);

export default Vue.extend({
  components: { KeyboardShortcuts, SuccessPopup, UploadPopup },
  data: function () {
    return {
      openKeyboard: false,
      height: "110%",
      mode: "SVG",
      nodes: nodes,
      connectors: connectors,
      enableConnectorSplit: true,
      constraints: DiagramConstraints.Default | DiagramConstraints.Bridging,
      selectedObject: {
        item: "",
        pre: "",
        after: "",
      },
      theDiagram: "",
      isValid: false,
      validateErrs: {},
      rulerSettings: {
        showRulers: true,
      },
      allSelectedItems: [],
      showSuccessPopup: false,
      showUploadPopup: false,
      selectionChange: (args) => {
        this.selectedObject = {
          item: "",
          pre: "",
          after: "",
        };
        if (args.newValue.length) {
          this.allSelectedItems = args.newValue;
        } else {
          this.allSelectedItems = [];
        }

        let selectedObj = {};
        let isSelectedItem = selectItem(args, diagram, selectedObj);
        if (isSelectedItem) {
          this.selectedObject = isSelectedItem;
        }
      },
      dragEnter: (args) => {
        let obj = args.element;
        if (obj instanceof Node) {
          if (
            obj &&
            obj.shape &&
            obj.shape.activity &&
            obj.shape.activity.subProcess
          ) {
            let activity = obj.shape.activity;
            if (
              activity &&
              activity.subProcess &&
              !activity.subProcess.collapsed
            ) {
              if (activity.subProcess.transaction) {
                if (activity.subProcess.transaction.cancel) {
                  activity.subProcess.transaction.cancel.visible = true;
                }
                if (activity.subProcess.transaction.failure) {
                  activity.subProcess.transaction.failure.visible = true;
                }
                if (activity.subProcess.transaction.success) {
                  activity.subProcess.transaction.success.visible = true;
                }
              }
            } else {
              if (obj) {
                let oWidth = obj.width || 0;
                let oHeight = obj.height || 0;

                obj.width = 100;
                obj.offsetX = obj.offsetX || 0;
                obj.offsetY = obj.offsetY || 0;
                obj.height = obj.height || 0;
                obj.height *= 100 / obj.width || 1;
                obj.offsetX += (obj.width - oWidth) / 2;
                obj.offsetY += (obj.height - oHeight) / 2;
              }
            }
          }
        }
      },
      commandManager: {
        commands: [
          {
            name: "nudgeUp",
            canExecute: function () {
              if (diagram.selectedItems.nodes[0].shape.type == "SwimLane") {
                return false;
              } else {
                return true;
              }
            },
            gesture: {
              key: Keys.Up,
            },
          },
          {
            name: "nudgeDown",
            canExecute: function () {
              if (diagram.selectedItems.nodes[0].shape.type == "SwimLane") {
                return false;
              } else {
                return true;
              }
            },
            gesture: {
              key: Keys.Down,
            },
          },
          {
            name: "nudgeRight",
            canExecute: function () {
              if (diagram.selectedItems.nodes[0].shape.type == "SwimLane") {
                return false;
              } else {
                return true;
              }
            },
            gesture: {
              key: Keys.Right,
            },
          },
          {
            name: "nudgeLeft",
            canExecute: function () {
              if (diagram.selectedItems.nodes[0].shape.type == "SwimLane") {
                return false;
              } else {
                return true;
              }
            },
            gesture: {
              key: Keys.Left,
            },
          },
        ],
      },
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
  provide() {
    return {
      diagram: [BpmnDiagrams, UndoRedo, DataBinding],
      SymbolPalette: [BpmnDiagrams, DataBinding],
    };
  },

  mounted: function () {
    this.height = window.innerHeight - 20;
    this.paletteheight = window.innerHeight - 20 + "px";
    diagram = this.$refs.diagramObject.ej2Instances;
    diagram.fitToPage();
  },
  methods: {
    undoAction() {
      let diagram;
      let diagramObj = document.getElementById("diagram");
      diagram = diagramObj.ej2_instances[0];
      diagram.undo();
    },
    redoAction() {
      let diagram;
      let diagramObj = document.getElementById("diagram");
      diagram = diagramObj.ej2_instances[0];
      // Reverts the last action performed
      diagram.redo();
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
    deleteSelectedItems() {
      if (this.allSelectedItems.length) {
        this.allSelectedItems.forEach((el) => diagram.remove(el));
      }
    },
    selectAll() {
      diagram.select([...diagram.nodes, ...diagram.connectors]);
    },
    validate() {
      const savedDiagram = diagram.saveDiagram();
      const validResult = validateDiagram(JSON.parse(savedDiagram));
      this.validateErrs = validResult;
      let isSound = false;
      for (let val of Object.entries(this.validateErrs)) {
        if (val[1].msg) {
          isSound = false;
          break;
        } else {
          isSound = true;
        }
      }
      if (isSound) {
        this.showUploadPopup = false;
        this.showSuccessPopup = true;
      }
    },
    downloadDiagram() {
      let options = {};
      options.mode = "Download";
      diagram.exportDiagram(options);
      this.showSuccessPopup = false;
    },
    uploadDiagram() {
      this.showSuccessPopup = false;
      this.theDiagram = diagram;
      setTimeout(() => {
        this.showUploadPopup = true;
      }, 500);
    },
    closeUploadPopup() {
      this.showUploadPopup = false;
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
.e-symbolpalette .e-symbol-hover:hover {
  border: 1px solid rgb(0, 115, 255);
  background: transparent;
}
.e-symbolpalette .e-symbol-selected {
  border: 1px solid rgb(0, 115, 255);
  background: transparent;
}

#uCMObbf8N5_header_groupElement text {
  display: none !important;
  color: transparent !important;
}

/* Show Selected Data */
.show_selected_data {
  width: calc(100% - 31px);
  position: absolute;
  background: white;
  bottom: 1px;
  transition: 0.2s all ease-in-out;
  z-index: 1;
  left: 26px;
  right: 5px;
  box-shadow: 0px 0px 5px -2px #000000b0;
}
.show_selected_data p {
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 16px !important;
  color: #716f6f;
}
.show_selected_data h5 {
  color: #716f6f;
  font-size: 22px;
}
.show_selected_data .container {
  height: 100%;
}
.v-card {
  padding: 10px;
}
#symbolpalette_container {
  padding-top: 15px;
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
