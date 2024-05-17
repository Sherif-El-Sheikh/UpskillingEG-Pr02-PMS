// from getAllProjects endpoint
export interface GeneralProject {
  id: number
  title: string
  description: string
  creationDate: Date
  modificationDate: Date
  manager: Manager
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

// // from getManagerProjects endpoint
// export interface ManagerProject {
//   id: number
//   title: string
//   description: string
//   creationDate: Date
//   modificationDate: Date
//   task?: Task
// }
// export interface Task {
//   id: number
//   title: string
//   description: string
//   creationDate: Date
//   modificationDate: Date
//   status: string
// }
