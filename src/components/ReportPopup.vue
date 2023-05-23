<template>
  <v-dialog
    v-model="openReport"
    width="80%"
    class="report_dialog"
    style="background: white"
  >
    <v-card style="padding: 15px 10px !important">
      <v-simple-table dense style="padding: 30px 0">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Item Name</th>
              <th class="text-left">Item Type</th>
              <th class="text-left">Predecessors</th>
              <th class="text-left">Successors</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="node in nodes" :key="node.id">
              <td>{{ node.itemName }}</td>
              <td>{{ node.itemType }}</td>
              <td>
                <v-menu v-if="node.inners.length" top>
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
                      v-for="(predecessor, i) in node.inners"
                      :key="predecessor.id"
                    >
                      <v-list-item-title
                        >{{ i + 1 }}- {{ predecessor.itemName }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <p v-else>None</p>
              </td>
              <td>
                <v-menu v-if="node.outters.length" top>
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
                      v-for="(successor, i) in node.outters"
                      :key="successor.id"
                    >
                      <v-list-item-title
                        >{{ i + 1 }}- {{ successor.itemName }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <p v-else>None</p>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-btn
        @click="openReport = false"
        style="
          margin: auto;
          display: block;
          background: indianred;
          color: white;
        "
        >Close</v-btn
      >
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      openReport: true,
    };
  },
  props: ["nodes"],
  methods: {
    closePopup() {
      this.$emit("close_popup");
    },
  },
  watch: {
    openReport(newVal) {
      if (!newVal) {
        this.closePopup();
      }
    },
  },
};
</script>

<style lang="scss">
table {
  background: white !important;
  min-width: 400px;
  tr {
    th,
    td {
      padding: 10px 0 !important;
      text-align: center;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
