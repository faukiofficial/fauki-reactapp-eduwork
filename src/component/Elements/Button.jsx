const Button = (props) => {
  const dsiplayAlert = () => {
    alert("Belum bisa login");
  };
  return (
    <div className="d-grid">
      <button
        onClick={dsiplayAlert}
        type={props.type}
        className={props.classname}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
