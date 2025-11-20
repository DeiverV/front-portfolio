import axios from 'axios'
import { env } from '@/config/env'

export const githubApi = axios.create({
  baseURL: env.GITHUB.BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${env.GITHUB.TOKEN}`,
  },
})
