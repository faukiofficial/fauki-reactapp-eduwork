const Button = (props) => {
  return (
    <div className="d-grid">
      <button
        type={props.type}
        className={props.classname}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
