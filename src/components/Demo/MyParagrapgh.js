import React from "react";

function MyParagrapgh(props) {
  console.log("MyParagrapgh is runnning!");
  return <p>{props.children}</p>;
}

export default MyParagrapgh;
