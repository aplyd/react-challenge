import { FC } from 'react';
import styles from '../../../styles/Title.module.css';

interface TitleProps {
  text: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: FC<TitleProps> = ({ text, headingLevel = 1 }) => {
  const Heading: keyof JSX.IntrinsicElements = `h${headingLevel}`;
  return (
    <div className={styles.title}>
      <Heading>{text}</Heading>
    </div>
  );
};

export default Title;
