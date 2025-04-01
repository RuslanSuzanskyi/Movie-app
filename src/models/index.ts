export interface Category {
  id: number
  name: string
  path: string
}

export interface Movie {
  id: number
  title: string
  overview: string
  release_date: string
  poster_path: string | null
  backdrop_path: string | null
  vote_average: number
  vote_count: number
  popularity: number
  original_language: string
  genre_ids: number[]
  adult: boolean
  video: boolean
  genre_names?: string[]
}
