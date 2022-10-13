import cx from 'classnames';
import { FC } from 'react';
import styles from '../../../styles/Button.module.css';

interface ButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  className = '',
  onClick = () => undefined
}) => {
  return (
    <button
      className={cx(styles.button, styles[className], styles.hovered)}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
