import { FC, useContext } from 'react';
import { SelectionContext } from '../../contexts/selectionContext';
import styles from '../../styles/Category.module.css';
import { SearchResult } from '../../types/omdbResponse';
import Nominee from '../Nominee/Nominee';
import Title from '../general/Title/Title';

interface CategoryProps {
  category: string;
  nominees: SearchResult[];
}

const Category: FC<CategoryProps> = ({ category, nominees }) => {
  const selectionContext = useContext(SelectionContext);
  return (
    <section className={styles.category}>
      <Title className="category" headingLevel={2} text={category} />
      <div className={styles['nominee-container']}>
        {nominees.map((n) => (
          <Nominee
            category={category}
            imageUrl={n.Poster}
            key={n.imdbID}
            selected={selectionContext?.userSelection[category] === n.Title}
            title={n.Title}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
