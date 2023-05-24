import { ENV_RAPIDAPI_HOST, ENV_RAPIDAPI_KEY, ENV_RAPIDAPI_URL } from '@env'

import axios from 'axios'

export const youtubeAPI = axios.create({
  baseURL: ENV_RAPIDAPI_URL,
  headers: {
    'X-RapidAPI-Key': ENV_RAPIDAPI_KEY,
    'X-RapidAPI-Host': ENV_RAPIDAPI_HOST,
  },
})
