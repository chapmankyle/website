import type { IAPIData, IEducation, IExperience, IMetadata, IProject } from '@/lib/types'

/** Base URL to use for the API endpoint */
export const BASE_URL = process.env.API_ROOT_URL ?? ''

/** API endpoint URL */
export const API_URL = `${BASE_URL}/api/v2`

type IdParam = "all" | "metadata" | "experience" | "education" | "projects"

const validIds: IdParam[] = ["all", "metadata", "experience", "education", "projects"]

export const fetchAPIData = async (id?: IdParam): Promise<IAPIData | IMetadata | IExperience | IEducation | IProject> => {
  let route = 'all'
  if (id != null && validIds.includes(id)) {
    route = id
  }

  const response = await fetch(`${API_URL}/${route}`, { method: 'GET' })
  return (await response.json()).data
}
