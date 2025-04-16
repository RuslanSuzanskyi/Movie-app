import { ref } from 'vue'

// IMPORTANT: The API does not provide a predefined list of categories,
// so they had to be hardcoded manually.
// If the API includes this data in the future, this code can be replaced with a dynamic request.

export const useMoviesCategories = () => {
  const movieCategories = ref([
    { id: 1, name: 'Popular', path: 'popular', type: 'movie' },
    { id: 2, name: 'Top Rated', path: 'top_rated', type: 'movie' },
    { id: 3, name: 'Upcoming', path: 'upcoming', type: 'movie' },
    { id: 4, name: 'Now Playing', path: 'now_playing', type: 'movie' },
  ])

  const tvCategories = ref([
    { id: 1, name: 'Popular', path: 'popular', type: 'tv' },
    { id: 2, name: 'Top Rated', path: 'top-rated', type: 'tv' },
    { id: 3, name: 'On The Air', path: 'on-the-air', type: 'tv' },
    { id: 4, name: 'Airing Today', path: 'airing-today', type: 'tv' },
  ])

  const peopleCategories = ref([{ id: 1, name: 'Popular People', path: 'popular', type: 'people' }])

  const moreCategories = ref([
    { id: 1, name: 'Trending', path: 'trending', type: '' },
    { id: 2, name: 'Genres', path: 'genres', type: '' },
    { id: 3, name: 'Collections', path: 'collections', type: '' },
  ])

  return { movieCategories, tvCategories, peopleCategories, moreCategories }
}
