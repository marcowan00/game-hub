// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  // return useData<Genre>("/genres");

  return { data: genres, isLoading: false, error: null };
};

export default useGenres;
