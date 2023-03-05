import React from "react";

function DemoOutput(props) {
  console.log("demooutput runnning!");
  return <p>{props.show ? "This is new!" : ""}</p>;
}

export default React.memo(DemoOutput);
