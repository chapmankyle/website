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
  startDate: string
  endDate: string
  title: string
  type: 'Full-time' | 'Part-time' | 'Internship'
  company: string
  imagePath: string
  description: string
  technologies: string[]
  dateAsString?: string
  duration?: string
}

export interface APIData {
  metadata: Metadata
  experience: Experience[]
}

export interface SectionProps {
  data: APIData
  blurDelay: number
}
