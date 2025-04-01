import axios from 'axios'

const API_BASE_URL = 'https://api.themoviedb.org'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
})
