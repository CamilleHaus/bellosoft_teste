import React, { forwardRef } from "react";

interface IInput {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

const Input = forwardRef<
  HTMLInputElement,
  IInput & React.InputHTMLAttributes<HTMLInputElement>
>(({ type, name, placeholder, label, ...rest }, ref) => {
  return (
    <div className="flex flex-col text-sm gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        className="bg-gray-100"
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
