import Label from "./Label";
import Input from "./Input";

const InputElement = (props) => {
  return (
    <div className="mb-3">
      <Label identity={props.identity} label={props.label}></Label>
      <Input
        type={props.type}
        identity={props.identity}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></Input>
    </div>
  );
};

export default InputElement;
