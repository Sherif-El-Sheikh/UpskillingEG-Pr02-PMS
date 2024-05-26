import { useState } from 'react'

import { AdminTasks, EmployeeTasks } from '../../components/Tasks'
import { Button } from 'react-bootstrap'

const Tasks = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <>
      <Button onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? 'Switch to Employee' : 'Switch to Admin'}
      </Button>
      <div className='bg-body-tertiary min'>
        {isAdmin ? <AdminTasks /> : <EmployeeTasks />}
      </div>
    </>
  )
}

export default Tasks
