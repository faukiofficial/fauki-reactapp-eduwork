import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Fauki" />
        <FunctionalComponent/>
      </div>
    );
  }
}

export default Komponen;
