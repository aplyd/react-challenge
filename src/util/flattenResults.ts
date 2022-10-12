import { OmdbResponse, SearchResult } from '../types/omdbResponse';

export const flattenResults = (arr: OmdbResponse[]): SearchResult[] => {
  return arr.reduce<SearchResult[]>((acc, curr) => {
    acc.push(...curr.Search);
    return acc;
  }, []);
};
