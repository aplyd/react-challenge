import { OmdbResponse, SearchResult } from '../types/omdbResponse';
import { flattenResults } from '../util/flattenResults';

// typically wouldn't do this but it's a free API and easily accessed without a backend anyway ¯\_(ツ)_/¯
const apiKey = '14ac79b8';

const api = {
  async getBallotData(): Promise<SearchResult[] | undefined> {
    try {
      const res = await Promise.all([
        fetch(
          `https://www.omdbapi.com/?s=california&page=${1}&apikey=${apiKey}`
        ),
        fetch(
          `https://www.omdbapi.com/?s=california&page=${2}&apikey=${apiKey}`
        ),
        fetch(
          `https://www.omdbapi.com/?s=california&page=${3}&apikey=${apiKey}`
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
