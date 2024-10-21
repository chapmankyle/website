export interface About {
  title: string
  description: string
  content: string
  content_last: string
}

export interface Banner {
  name: string
  location: string
  position: string
}

export interface Project {
  title: string
  github: string
  languages: string
  description: string
  image?: string
}

export interface Experience {
  color: string
  startDate: string
  endDate: string
  title: string
  company: string
  description: string
  technologies: string[]
}

export interface Education {
  color: string
  startYear: string
  endYear: string
  title: string
  place: string
  description: string
}

const _getAbout = async (url: string): Promise<About> => {
  const response = await fetch(`${url}/about`)
  if (!response.ok) {
    throw new Error('Failed to fetch about information from API.')
  }

  return await response.json() as About
}

const _getBanner = async (url: string): Promise<Banner> => {
  const response = await fetch(`${url}/banner`)
  if (!response.ok) {
    throw new Error('Failed to fetch banner from API.')
  }

  return await response.json() as Banner
}

const _getProjects = async (url: string): Promise<Project[]> => {
  const response = await fetch(`${url}/projects`)
  if (!response.ok) {
    throw new Error('Failed to fetch projects from API.')
  }

  return await response.json() as Project[]
}

const _getExperience = async (url: string): Promise<Experience[]> => {
  const response = await fetch(`${url}/experience`)
  if (!response.ok) {
    throw new Error('Failed to fetch experience from API.')
  }

  return await response.json() as Experience[]
}

const _getEducation = async (url: string): Promise<Education[]> => {
  const response = await fetch(`${url}/education`)
  if (!response.ok) {
    throw new Error('Failed to fetch education from API.')
  }

  return await response.json() as Education[]
}

export const getAPIData = async (): Promise<{
  banner: Banner | null
  about: About | null
  projects: Project[] | null
  experience: Experience[] | null
  education: Education[] | null
}> => {
  const baseUrl = 'https://kylechapman-api.netlify.app'
  const [banner, about, projects, experience, education] = await Promise.allSettled([
    _getBanner(baseUrl),
    _getAbout(baseUrl),
    _getProjects(baseUrl),
    _getExperience(baseUrl),
    _getEducation(baseUrl)
  ])

  return {
    banner: banner.status === 'fulfilled' ? banner.value : null,
    about: about.status === 'fulfilled' ? about.value : null,
    projects: projects.status === 'fulfilled' ? projects.value : null,
    experience: experience.status === 'fulfilled' ? experience.value : null,
    education: education.status === 'fulfilled' ? education.value : null
  }
}

export const STATIC_DATA = {
  name: 'Kyle Chapman',
  initials: 'KC',
  url: 'https://kylechapman.netlify.app',
  description: 'Full Stack Software Engineer. I love working on interesting projects.',
  avatarUrl: '/me.jpg'
}
