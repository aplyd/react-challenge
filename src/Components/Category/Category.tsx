import { FC } from 'react';
import { SearchResult } from '../../types/omdbResponse';
import Nominee from '../Nominee/Nominee';
import Title from '../general/Title/Title';

interface CategoryProps {
  category: string;
  nominees: SearchResult[];
}

const Category: FC<CategoryProps> = ({ category, nominees }) => {
  return (
    <section className="category">
      <Title headingLevel={2} text={category} />
      {nominees.map((n) => (
        <Nominee imageUrl={n.Poster} key={n.imdbID} title={n.Title} />
      ))}
    </section>
  );
};

export default Category;
