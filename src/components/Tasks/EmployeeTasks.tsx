/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { apiProtected } from '../../utils/api'

import TasksList from './TasksList'
import { Task } from '../../types/interfaces'

const EmployeeTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true)
        const response = await apiProtected.get('/Task')
        setTasks(response.data.data)
      } catch (error) {
        console.error('Failed to fetch tasks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <div className='bg-white shadow-sm p-3 '>
        <h2>Task Board</h2>
      </div>
      <div className='continer mt-3 overflow-hidden'>
        <div className='row gap-sm-2 gap-md-3 justify-content-around'>
          <TasksList
            listTitle={'To Do'}
            listStatus='ToDo'
            tasks={tasks}
            setTasks={setTasks}
          />
          <TasksList
            listTitle={'In Progress'}
            listStatus='InProgress'
            tasks={tasks}
            setTasks={setTasks}
          />
          <TasksList
            listTitle={'Done'}
            listStatus='Done'
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </div>
    </>
  )
}

export default EmployeeTasks
