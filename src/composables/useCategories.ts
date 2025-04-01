import { ref } from 'vue'

// IMPORTANT: The API does not provide a predefined list of categories,
// so they had to be hardcoded manually.
// If the API includes this data in the future, this code can be replaced with a dynamic request.

export const useMoviesCategories = () => {
  const movieCategories = ref([
    { id: 1, name: 'Popular', path: 'movie/popular' },
    { id: 2, name: 'Top Rated', path: 'movie/top_rated' },
    { id: 3, name: 'Upcoming', path: 'movie/upcoming' },
    { id: 4, name: 'Now Playing', path: 'movie/now_playing' },
  ])

  const tvCategories = ref([
    { id: 1, name: 'Popular', path: 'tv/popular' },
    { id: 2, name: 'Top Rated', path: 'tv/top-rated' },
    { id: 3, name: 'On The Air', path: 'tv/on-the-air' },
    { id: 4, name: 'Airing Today', path: 'tv/airing-today' },
  ])

  const peopleCategories = ref([{ id: 1, name: 'Popular People', path: 'people/popular' }])

  const moreCategories = ref([
    { id: 1, name: 'Trending', path: 'trending' },
    { id: 2, name: 'Genres', path: 'genres' },
    { id: 3, name: 'Collections', path: 'collections' },
  ])

  return { movieCategories, tvCategories, peopleCategories, moreCategories }
}
