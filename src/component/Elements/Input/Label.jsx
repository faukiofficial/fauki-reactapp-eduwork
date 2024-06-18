const Label = (props) => {
  return (
    <label htmlFor={props.identity} className="form-label">
      {props.label}
    </label>
  );
};

export default Label;
