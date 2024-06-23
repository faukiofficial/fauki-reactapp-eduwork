const Input = (props) => {
  return (
    <input
      type={props.type}
      className="form-control"
      id={props.identity}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Input;
