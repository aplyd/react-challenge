import { CategorizedBallotData } from '../types/ballotData';
import { SearchResult } from '../types/omdbResponse';

export const categorizeBallotData = (
  allBallotData: SearchResult[]
): CategorizedBallotData[] => {
  const categories = [
    'Best Actor',
    'Best Picture',
    'Best Director',
    'Best Actress',
    'Best Supporting Actor'
  ];

  // slice the first 25 items since we only need 5 nominees in 5 categories (5 X 5 = 25)
  const firstTwentyFiveNominees = allBallotData.slice(0, 25);
  const categorizedData = [];

  // chunk all ballot data into groups of 5, add a category and id
  for (let i = 0; i < firstTwentyFiveNominees.length; i += 5) {
    categorizedData.push({
      category: categories[i / 5],
      id: i / 5 + 1,
      items: [...firstTwentyFiveNominees.slice(i, i + 5)]
    });
  }

  return categorizedData;
};
