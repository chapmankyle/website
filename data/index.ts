/**
 * Base URL to use for the API endpoint.
 * TODO: Change this to the actual API URL.
 */
const BASE_URL = 'http://localhost:8787/api/v2'

interface Experience {
  id: number
  dateAsString?: string
  startDate: string
  endDate: string
  title: string
  type: string
  company: string
  description: string
  technologies: string[]
}

export interface APIData {
  metadata: {
    name: string
    initials: string
    url: string
    location: string
    title: string
    summary: string
    languages: string[]
  }
  experience: Experience[]
}

export const fetchAPIData = async (): Promise<APIData> => {
  const response = await fetch(`${BASE_URL}/all`)
  return (await response.json()).data
}

export const STATIC_DATA = {
  name: 'Kyle Chapman',
  initials: 'KC',
  url: 'https://kylechapman.netlify.app',
  description: 'Full Stack Software Engineer. I love working on interesting projects.',
  avatarUrl: '/me.jpg'
}
