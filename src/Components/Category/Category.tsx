import { FC } from 'react';
import { SearchResult } from '../../types/omdbResponse';
import Title from '../general/Title/Title';
import Nominee from '../Nominee/Nominee';

interface CategoryProps {
  category: string;
  nominees: SearchResult[];
}

const Category: FC<CategoryProps> = ({ category, nominees }) => {
  return (
    <section className="category">
      <Title text={category} />
      {nominees.map((n) => (
        <Nominee title={n.Title} imageUrl={n.Poster} key={n.imdbID} />
      ))}
    </section>
  );
};

export default Category;
