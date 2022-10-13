import { FC } from 'react';
import styles from '../../styles/Category.module.css';
import { SearchResult } from '../../types/omdbResponse';
import Nominee from '../Nominee/Nominee';
import Title from '../general/Title/Title';

interface CategoryProps {
  category: string;
  nominees: SearchResult[];
}

const Category: FC<CategoryProps> = ({ category, nominees }) => {
  return (
    <section className={styles.category}>
      <Title className="category" headingLevel={2} text={category} />
      <div className={styles['nominee-container']}>
        {nominees.map((n) => (
          <Nominee imageUrl={n.Poster} key={n.imdbID} title={n.Title} />
        ))}
      </div>
    </section>
  );
};

export default Category;
