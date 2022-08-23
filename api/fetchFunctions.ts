import { Movies } from "./types";

export const basicFetch = async <returnType>(endpoint: string): Promise<returnType> => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
}

// fetch data from the API
export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  const data = await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
  return data;
}