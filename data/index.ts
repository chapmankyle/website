import { APIData } from '@/lib/types'

/** Base URL to use for the API endpoint */
const BASE_URL = process.env.API_ROOT_URL ?? ''

/** API endpoint URL */
const API_URL = `${BASE_URL}/api/v2`

export const fetchAPIData = async (): Promise<APIData> => {
  const response = await fetch(`${API_URL}/all`)
  return (await response.json()).data
}

export const STATIC_DATA = {
  name: 'Kyle Chapman',
  initials: 'KC',
  url: 'https://kylechapman.netlify.app',
  description: 'Full Stack Software Engineer. I love working on interesting projects.',
  avatarUrl: '/me.jpg'
}
