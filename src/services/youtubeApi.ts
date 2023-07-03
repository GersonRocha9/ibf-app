import { ENV_RAPIDAPI_HOST, ENV_RAPIDAPI_KEY, ENV_RAPIDAPI_URL } from '@env'

import axios from 'axios'
import { Linking } from 'react-native'

export const youtubeAPI = axios.create({
  baseURL: ENV_RAPIDAPI_URL,
  headers: {
    'X-RapidAPI-Key': ENV_RAPIDAPI_KEY,
    'X-RapidAPI-Host': ENV_RAPIDAPI_HOST,
  },
})

export async function handleOpenVideoOnYouTube(videoId: string) {
  await Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`)
}

export async function getVideosFromYouTube(id: string, isReverseOrder = false) {
  const response = await youtubeAPI.get('/playlist/videos/', {
    params: {
      id,
      hl: 'pt',
      gl: 'BR',
    },
  })

  return isReverseOrder
    ? response.data.contents.reverse()
    : response.data.contents
}
