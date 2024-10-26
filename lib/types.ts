export interface IMetadata {
  name: string
  initials: string
  url: string
  location: string
  title: string
  summary: string
  about: string
  languages: readonly string[]
}

export interface ILocation {
  flag: string
  name: string
}

export interface IDuration {
  years: number
  months: number
}

export interface IExperience {
  id: number
  startDate: string
  endDate: string
  title: string
  type: 'Full-time' | 'Part-time' | 'Internship'
  company: string
  imagePath: string
  description: string
  technologies: readonly string[]
  location: ILocation
  dateAsString?: string
  duration?: IDuration
  previous?: number // Identifier for previous experience at same company
}

export interface IEducation {
  id: number
  startYear: string
  endYear: string
  title: string
  school: string
  imagePath: string
  description: string
  location: ILocation
}

export interface IProject {
  id: number
  title: string
  github: string
  languages: readonly string[]
  description: string
  imagePath?: string
  isWebsite?: boolean
  image?: string
}

export interface IAPIData {
  metadata: IMetadata
  experience: readonly IExperience[]
  education: readonly IEducation[]
  projects: readonly IProject[]
}

export interface ISectionProps {
  data: IAPIData
  blurDelay: number
}
