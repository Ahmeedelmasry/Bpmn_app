const dragEnter = (args) => {
  let obj = args.element;
  if (obj instanceof Node) {
    if (
      obj &&
      obj.shape &&
      obj.shape.activity &&
      obj.shape.activity.subProcess
    ) {
      let activity = obj.shape.activity;
      if (activity && activity.subProcess && !activity.subProcess.collapsed) {
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
};

export default dragEnter;
