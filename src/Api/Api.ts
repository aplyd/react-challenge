import { OmdbResponse, SearchResult } from '../types/omdbResponse';
import { flattenResults } from '../util/flattenResults';

const api = {
  async getBallotData(): Promise<SearchResult[] | undefined> {
    try {
      const res = await Promise.all([
        fetch(
          `http://www.omdbapi.com/?s=california&page=${1}&apikey=${
            process.env.REACT_APP_OMDB_API_KEY
          }`
        ),
        fetch(
          `http://www.omdbapi.com/?s=california&page=${2}&apikey=${
            process.env.REACT_APP_OMDB_API_KEY
          }`
        ),
        fetch(
          `http://www.omdbapi.com/?s=california&page=${3}&apikey=${
            process.env.REACT_APP_OMDB_API_KEY
          }`
        )
      ]);

      const data: OmdbResponse[] = await Promise.all(res.map((r) => r.json()));
      return flattenResults(data);
    } catch {
      // eslint-disable-next-line
      alert('ballot data failed to load, please reload the page');
    }

    return undefined;
  }
};

export default api;
