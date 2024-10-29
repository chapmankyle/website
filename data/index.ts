import type { IAPIData, IEducation, IExperience, IMetadata, IProject } from '@/lib/types'

/** Base URL to use for the API endpoint */
export const BASE_URL = process.env.API_ROOT_URL ?? ''

/** API endpoint URL */
export const API_URL = `${BASE_URL}/v2`

type IdParam = 'all' | 'metadata' | 'experience' | 'education' | 'projects'

const validIds: IdParam[] = ['all', 'metadata', 'experience', 'education', 'projects']

interface IAuthData {
  payload: {
    role: string
    exp: number
    iat: number
  }
  token: string
}

interface IAuthResponse {
  data: IAuthData | null
  error: any | null
}

const authorize = async (): Promise<IAuthResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/authorize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD
      }),
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error('Something went wrong when attempting to authorize.')
    }

    const { payload, token } = await response.json()
    return { data: { payload, token }, error: null }
  } catch (err: any) {
    console.error('Error authorizing with API:', err)
    return { data: null, error: err }
  }
}

export const fetchAPIData = async (id?: IdParam): Promise<IAPIData | IMetadata | IExperience | IEducation | IProject> => {
  const { data, error } = await authorize()
  if (data == null || error != null) {
    throw new Error(error?.message || 'An unknown error occurred.')
  }

  let route = 'all'
  if (id != null && validIds.includes(id)) {
    route = id
  }

  const response = await fetch(`${API_URL}/${route}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    cache: 'no-store'
  })
  return (await response.json()).data
}
