import cx from 'classnames';
import { FC, useContext } from 'react';
import { SelectionContext } from '../../contexts/selectionContext';
import styles from '../../styles/Nominee.module.css';
import Button from '../general/Button/Button';
import Title from '../general/Title/Title';

interface NomineeProps {
  title: string;
  imageUrl: string;
  category: string;
  selected: boolean;
}

const Nominee: FC<NomineeProps> = ({ title, imageUrl, category, selected }) => {
  const selectionContext = useContext(SelectionContext);

  const showImage = imageUrl !== 'N/A';
  return (
    <div className={cx(styles.nominee, { [styles.selected]: selected })}>
      <Title className="nominee" headingLevel={3} text={title} />
      {showImage && (
        <div
          alt={`${title} movie poster`}
          className={styles.poster}
          role="img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      <Button
        className="nominee"
        onClick={() => selectionContext?.chooseSelection(category, title)}
        text="Select Nominee"
      />
    </div>
  );
};

export default Nominee;
