import cx from 'classnames';
import { FC } from 'react';
import styles from '../../../styles/Title.module.css';

interface TitleProps {
  text: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Title: FC<TitleProps> = ({ text, headingLevel = 1, className = '' }) => {
  const Heading: keyof JSX.IntrinsicElements = `h${headingLevel}`;

  return (
    <div className={cx(styles.title, styles[className])}>
      <Heading>{text}</Heading>
    </div>
  );
};

export default Title;
