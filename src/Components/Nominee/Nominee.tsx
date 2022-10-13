import { FC } from 'react';
import styles from '../../styles/Nominee.module.css';
import Button from '../general/Button/Button';
import Title from '../general/Title/Title';

interface NomineeProps {
  title: string;
  imageUrl: string;
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    alt?: string;
    className?: string;
  }
}

const Nominee: FC<NomineeProps> = ({ title, imageUrl }) => {
  const showImage = imageUrl !== 'N/A';

  return (
    <div className={styles.nominee}>
      <Title className="nominee" headingLevel={3} text={title} />
      {showImage && (
        <div
          alt={`${title} movie poster`}
          className={styles.poster}
          role="img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      <Button className="nominee" text="Select Nominee" />
    </div>
  );
};

export default Nominee;
