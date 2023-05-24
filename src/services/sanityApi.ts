import { ENV_SANITYCMS_DATASET, ENV_SANITYCMS_PROJECTID } from '@env'

import axios from 'axios'

const PROJECT_ID = ENV_SANITYCMS_PROJECTID
const DATASET = ENV_SANITYCMS_DATASET
const QUERY = encodeURIComponent('*[_type == "event"]')
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

export const sanityAPI = axios.create({
  baseURL: URL,
})
