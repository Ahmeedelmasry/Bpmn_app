export default function checkPoolStartEnd(nodes) {
  let poolStart = false;
  let poolEnd = false;
  let poolMultiStart = false;
  let poolMultiEnd = false;

  for (let i = 0; i < nodes.length; i++) {
    if (
      nodes[i].shape.shape === "Event" &&
      nodes[i].shape.event.event === "Start"
    ) {
      poolStart = true;
      for (let j = 0; j < nodes.length; j++) {
        if (
          nodes[j].shape.shape === "Event" &&
          nodes[j].shape.event.event === "Start" &&
          nodes[j].id !== nodes[i].id
        ) {
          poolMultiStart = true;
        }
      }
    }
    if (
      nodes[i].shape.shape === "Event" &&
      nodes[i].shape.event.event === "End"
    ) {
      poolEnd = true;
      for (let j = 0; j < nodes.length; j++) {
        if (
          nodes[j].shape.shape === "Event" &&
          nodes[j].shape.event.event === "End" &&
          nodes[j].shape.event.trigger === "None" &&
          nodes[j].id !== nodes[i].id
        ) {
          poolMultiEnd = true;
        }
      }
    }
  }
  return { poolStart, poolEnd, poolMultiStart, poolMultiEnd };
}
