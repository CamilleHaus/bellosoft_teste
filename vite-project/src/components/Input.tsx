interface IInput {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

const Input = ({ type, name, placeholder, label }: IInput) => {
  return (
    <div className="flex flex-col text-sm gap-2">
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
