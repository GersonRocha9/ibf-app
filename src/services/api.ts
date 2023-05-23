import axios from 'axios'

const PROJECT_ID = 'k1j0zc38'
const DATASET = 'production'
const QUERY = encodeURIComponent('*[_type == "event"]')
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

export const api = axios.create({
  baseURL: URL,
})
