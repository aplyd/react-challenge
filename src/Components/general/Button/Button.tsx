import { FC } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, className }) => {
  return (
    <button className={className} type="button">
      {text}
    </button>
  );
};

export default Button;
