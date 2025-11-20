import axios from 'axios'
import { env } from '@/config/env'

export const catsApi = axios.create({ baseURL: env.CATAAS.BASE_URL })
