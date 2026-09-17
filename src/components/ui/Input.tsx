type InputProps = {
  placeholder?: string;
  type?: string;
};

function Input({ placeholder, type = "text" }: InputProps) {
  return <input type={type} placeholder={placeholder} />;
}

export default Input;