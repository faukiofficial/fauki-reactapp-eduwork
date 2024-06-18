const Input = (props) => {
  return (
    <input
      type={props.type}
      className="form-control"
      id={props.identity}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
