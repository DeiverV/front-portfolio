import axios from 'axios'
import { env } from '@/config/env'

export const frankfurterApi = axios.create({
  baseURL: env.FRANKFURTER.BASE_URL,
})
