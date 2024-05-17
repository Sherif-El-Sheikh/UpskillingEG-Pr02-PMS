// from getAllProjects endpoint
export interface Project {
  id: number
  title: string
  description: string
  creationDate: Date
  modificationDate: Date
  manager?: Manager
  task?: Task[]
}
export interface Manager {
  id: number
  userName: string
  imagePath: string
  email: string
  password: string
  country: string
  phoneNumber: string
  verificationCode: null
  isVerified: boolean
  isActivated: boolean
  creationDate: Date
  modificationDate: Date
}

export interface Task {
  id: number
  title: string
  description: string
  creationDate: Date
  modificationDate: Date
  status: string
}
