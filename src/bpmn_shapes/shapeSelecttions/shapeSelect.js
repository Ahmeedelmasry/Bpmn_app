export default function (args, diagram, selectedObj) {
  selectedObj = {
    item: "",
    pre: "",
    after: "",
  };
  let selectedArr = args.newValue;
  //1 Save Diagrams To Get Nodes Indexing
  let savedDiagram = diagram.saveDiagram();
  let nodes = JSON.parse(savedDiagram).nodes;
  if (
    selectedArr.length &&
    selectedArr.length == 1 &&
    selectedArr[0].shape.type !== "Text" &&
    selectedArr[0].shape.type !== "SwimLane" &&
    selectedArr[0].type !== "Orthogonal" &&
    selectedArr[0].type !== "Straight"
  ) {
    //2 Get Single Selected item
    let selectedItem = selectedArr[0].properties;
    if (
      selectedItem.shape.shape == "Activity" &&
      selectedItem.shape.activity.activity == "SubProcess"
    ) {
      return;
    }
    const itemWithConnectors = nodes.filter(
      (el) => el.id === selectedItem.id
    )[0];

    // Check If is not pool
    if (itemWithConnectors) {
      selectedObj.item = itemWithConnectors;
      //3- Get Predecessors
      if (!itemWithConnectors.inEdges.length) {
        selectedObj.pre = "";
      } else {
        const inEdges = itemWithConnectors.inEdges;
        const preItems = [];
        inEdges.forEach((inner) => {
          nodes.forEach((node) => {
            node.outEdges.forEach((outter) => {
              if (outter == inner) {
                let exists = false;
                for (let i = 0; i < preItems.length; i++) {
                  if (preItems[i].id == node.id) {
                    exists = true;
                    break;
                  }
                }
                if (!exists) {
                  preItems.push(node);
                }
              }
            });
          });
        });
        selectedObj.pre = preItems;
      }

      //3- Get Successors
      if (!itemWithConnectors.outEdges.length) {
        selectedObj.after = "";
      } else {
        const outEdges = itemWithConnectors.outEdges;
        const afterItems = [];
        outEdges.forEach((outter) => {
          nodes.forEach((node) => {
            node.inEdges.forEach((inner) => {
              if (outter == inner) {
                let exists = false;
                for (let i = 0; i < afterItems.length; i++) {
                  if (afterItems[i].id == node.id) {
                    exists = true;
                    break;
                  }
                }
                if (!exists) {
                  afterItems.push(node);
                }
              }
            });
          });
        });
        selectedObj.after = afterItems;
      }
    } else {
      // Deal With Pool Shapes
      const lanes = nodes
        .filter((el) => el.shape.type === "SwimLane")[0]
        .shape.lanes.map((el) => el);
      const poolNodes = [];
      lanes.map((lane) => {
        lane.children.map((child) => poolNodes.push(child));
      });
      const poolItemWithConnectors = poolNodes.filter(
        (el) => el.id === selectedItem.id
      )[0];
      if (poolItemWithConnectors) {
        selectedObj.item = poolItemWithConnectors;
        //3- Get Predecessors
        if (!poolItemWithConnectors.inEdges.length) {
          selectedObj.pre = "";
        } else {
          const inEdges = poolItemWithConnectors.inEdges;
          const preItems = [];
          inEdges.forEach((inner) => {
            poolNodes.forEach((node) => {
              node.outEdges.forEach((outter) => {
                if (outter == inner) {
                  let exists = false;
                  for (let i = 0; i < preItems.length; i++) {
                    if (preItems[i].id == node.id) {
                      exists = true;
                      break;
                    }
                  }
                  if (!exists) {
                    preItems.push(node);
                  }
                }
              });
            });
          });
          selectedObj.pre = preItems;
        }

        //3- Get Successors
        if (!poolItemWithConnectors.outEdges.length) {
          selectedObj.after = "";
        } else {
          const outEdges = poolItemWithConnectors.outEdges;
          const afterItems = [];
          outEdges.forEach((outter) => {
            poolNodes.forEach((node) => {
              node.inEdges.forEach((inner) => {
                if (outter == inner) {
                  let exists = false;
                  for (let i = 0; i < afterItems.length; i++) {
                    if (afterItems[i].id == node.id) {
                      exists = true;
                      break;
                    }
                  }
                  if (!exists) {
                    afterItems.push(node);
                  }
                }
              });
            });
          });
          selectedObj.after = afterItems;
        }
      }
    }
    return selectedObj;
  }
}
