export interface OmdbResponse {
  Response: string;
  Search: SearchResult[];
  totalResults: string;
}

export interface SearchResult {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
