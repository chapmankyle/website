export interface IMetadata {
  name: string
  initials: string
  url: string
  location: string
  title: string
  summary: string
  languages: string[]
}

export interface ILocation {
  flag: string
  name: string
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
  technologies: string[]
  location: ILocation
  dateAsString?: string
  duration?: string
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

export interface IAPIData {
  metadata: IMetadata
  experience: IExperience[]
  education: IEducation[]
}

export interface ISectionProps {
  data: IAPIData
  blurDelay: number
}
