import "./Button.css"

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <button className="button">{text}</button>;
};

export default Button;
