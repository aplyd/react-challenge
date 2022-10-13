import { FC } from 'react';

interface TitleProps {
  text: string;
  className?: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: FC<TitleProps> = ({ text, className, headingLevel = 1 }) => {
  const Heading: keyof JSX.IntrinsicElements = `h${headingLevel}`;
  return (
    <div className={className}>
      <Heading>{text}</Heading>
    </div>
  );
};

export default Title;
