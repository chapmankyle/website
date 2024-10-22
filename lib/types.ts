export interface Metadata {
  name: string
  initials: string
  url: string
  location: string
  title: string
  summary: string
  languages: string[]
}

export interface Experience {
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
  metadata: Metadata
  experience: Experience[]
}

export interface SectionProps {
  data: APIData
  blurDelay: number
}
