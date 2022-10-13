import { FC } from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={className}>
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
