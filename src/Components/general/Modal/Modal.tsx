import { FC, ReactNode, Dispatch, SetStateAction } from 'react';
import styles from '../../../styles/Modal.module.css';
import Button from '../Button/Button';

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode | JSX.Element;
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  if (!showModal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Button
          className="close"
          onClick={() => setShowModal(false)}
          text="X"
        />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
