function echoType(value) {
  valueType = typeof value;
  if (valueType === "string" || valueType === "number") {
    console.log(valueType);
    console.log(value);
  } else {
    console.log(valueType);
    console.log("Parameter is not suitable for printing");
  }
}
echoType(null);
