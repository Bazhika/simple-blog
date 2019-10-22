const isArrayEmpty = (arr) => {
  return arr === undefined && arr === null && arr.length <= 0;
};

const dumpLogs = (message) => {
  console.log(message);

  // send it to a tool for tracking
};

export {isArrayEmpty, dumpLogs}