import axios from 'axios'

const URL = `https://k1j0zc38.api.sanity.io/v2021-10-21/data/query/production`

export const sanityAPI = axios.create({
  baseURL: URL,
})
