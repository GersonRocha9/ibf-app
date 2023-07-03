import {
  ENV_INSTAGRAM_RAPIDAPI_HOST,
  ENV_INSTAGRAM_RAPIDAPI_URL,
  ENV_RAPIDAPI_KEY,
} from '@env'

import axios from 'axios'

export const instagramAPI = axios.create({
  baseURL: ENV_INSTAGRAM_RAPIDAPI_URL,
  headers: {
    'X-RapidAPI-Key': ENV_RAPIDAPI_KEY,
    'X-RapidAPI-Host': ENV_INSTAGRAM_RAPIDAPI_HOST,
  },
})

export interface InstagramEventResponse {
  node: any
  data: {
    user: {
      edge_owner_to_timeline_media: {
        edges: {
          node: {
            id: string
            display_url: string
          }
        }
      }
    }
  }
}

export async function getEvents() {
  const instagramResponse = await instagramAPI.get('/ig/posts_username/', {
    params: {
      user: 'ibflamboyant',
    },
  })

  return instagramResponse.data.data.user.edge_owner_to_timeline_media.edges
}
