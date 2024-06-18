import { useState } from "react";
import PropTypes from "prop-types";

const FunctionalComponent = (props) => {
  const [value, setValue] = useState(0);
  const handlesMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const handlesPlus = () => {
    setValue(value + 1);
  };
    const { nama = "Rijatul H" } = props;
  return (
    <>
      <h1>Functional Component</h1>
      <h2>Hello {nama}</h2>
      <button onClick={handlesMinus}>-</button>
      <span> {value} </span>
      <button onClick={handlesPlus}>+</button>
    </>
  );
};

// FunctionalComponent.defaultProps = {
//   nama: "Rijatul",
// };

FunctionalComponent.propTypes = {
    nama: PropTypes.string.isRequired
}

export default FunctionalComponent;
