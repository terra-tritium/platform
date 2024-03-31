import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  AxiosError,
  isAxiosError,
} from 'axios'

import { publicEnv as env } from '@/env/client'

const api: AxiosInstance = axios.create({
  baseURL: `${env.NEXT_PUBLIC_API_URL}/api`,
} satisfies AxiosRequestConfig)

const sapi = (server: string): AxiosInstance =>
  axios.create({
    baseURL: `https://api-${server}.${env.NEXT_PUBLIC_ROOT_DOMAIN}/api`,
  } satisfies AxiosRequestConfig)

export { api, sapi, AxiosError, isAxiosError }
