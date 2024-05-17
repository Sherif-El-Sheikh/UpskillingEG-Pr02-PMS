// from getAllProjects endpoint
export interface Project {
  id: number
  title: string
  description: string
  creationDate: string
  modificationDate: string
  manager?: Manager
  task?: Task[]
}
export interface Manager {
  id: number
  userName: string
  imagePath?: string
  email: string
  password: string
  country: string
  phoneNumber: string
  verificationCode?: string
  isVerified: boolean
  isActivated: boolean
  creationDate: string
  modificationDate: string
}

export interface Task {
  id: number
  title: string
  description: string
  creationDate: string
  modificationDate: string
  status: 'ToDo' | 'InProgress' | 'Done'
}
