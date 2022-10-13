import cx from 'classnames';
import { FC } from 'react';
import styles from '../../../styles/Button.module.css';

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, className = '' }) => {
  return (
    <button
      className={cx(styles.button, styles[className], styles.hovered)}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
