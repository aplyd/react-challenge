import { FC } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
