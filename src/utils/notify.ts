import { toast } from 'react-toastify'

// parameters type
interface TParams {
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
  time?: number
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
  hideProgressBar?: boolean
  closeOnClick?: boolean
  pauseOnHover?: boolean
  draggable?: boolean
  theme?: 'light' | 'dark' | 'colored'
}

export const notify = ({
  type,
  message,
  time = 2500,
  position = 'top-right',
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  theme = 'light',
}: TParams) => {
  toast[type](message, {
    autoClose: time,
    position: position,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    theme: theme,
  })
}
