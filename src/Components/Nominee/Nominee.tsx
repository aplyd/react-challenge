import { FC } from 'react';
import styles from '../../styles/Nominee.module.css';
import Button from '../general/Button/Button';
import Title from '../general/Title/Title';

interface NomineeProps {
  title: string;
  imageUrl: string;
}

const Nominee: FC<NomineeProps> = ({ title, imageUrl }) => {
  const showImage = imageUrl !== 'N/A';

  return (
    <div className={styles.nominee}>
      <Title className="nominee" headingLevel={3} text={title} />
      {showImage && <img alt={`${title} movie poster`} src={imageUrl} />}
      <Button className="select-nominee" text="Select Nominee" />
    </div>
  );
};

export default Nominee;
