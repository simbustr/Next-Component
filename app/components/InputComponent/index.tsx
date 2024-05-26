import React from "react";

interface InputComponentProps {
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}

const InputComponent = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  name,
  className = "",
}: InputComponentProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={` outline-none px-4 py-2 border rounded-md  ${className}`}
      />
    </div>
  );
};

export default InputComponent;
