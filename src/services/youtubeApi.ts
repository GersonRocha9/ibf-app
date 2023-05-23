import axios from 'axios'

export const youtubeAPI = axios.create({
  baseURL: 'https://youtube138.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '1ffe295876msh25eb305e6c62da5p1af18cjsn99a9f0ae72ac',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
})
