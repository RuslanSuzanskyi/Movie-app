import { ref } from 'vue'
import { api } from '@/services/api'

export const useTvShows = () => {
  const tv = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getchTvShows = async (category: string) => {
    loading.value = true
    error.value = null

    try {
      const response = await api(`/3/tv/${category}`)
      tv.value = response?.data.results
    } catch (err) {
      console.error(`Error fetching tv/${category}:`, err)
      error.value = 'An error occurred while fetching data'
    } finally {
      loading.value = false
    }
  }

  return { tv, loading, error, getchTvShows }
}
