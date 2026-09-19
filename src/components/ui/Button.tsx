import "./Button.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

function Button({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant}`}
    >
      {text}
    </button>
  );
}

export default Button;