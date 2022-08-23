export type Movie = {
  id: number
  backdrop_path: string
  original_title: string
  title: string
  overview: string
  popularity: number
  release_date: string
  poster_path: string
  vote_average: number
  vote_count: number
  budget: number
  runtime: number
  revenue: number
}

export type Movies = {
  page: number
  total_results: number
  total_pages: number
  results: Movie[]
}


export type Crew = {
  job: string
  name: string
  credit_id: number
}

export type Cast = {
  character: string
  credit_id: string
  name: string
  profile_path: string
}

export type Credits = {
  id: number
  crew: Crew[]
  cast: Cast[]
}

