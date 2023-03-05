import React from "react";
import MyParagrapgh from "./MyParagrapgh";

function DemoOutput(props) {
  console.log("demooutput runnning!");
  return (
    <MyParagrapgh>{props.show ? "This is new bla test!" : ""}</MyParagrapgh>
  );
}

export default React.memo(DemoOutput);
