import { SearchResult } from './omdbResponse';

export interface CategorizedBallotData {
  category: string;
  id: number;
  items: SearchResult[];
}
