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
        <div className='row gap-sm-2 gap-md-5 justify-content-center'>
          <TasksList listTitle={'To Do'} tasks={tasks} />
          <TasksList listTitle={'In Progress'} tasks={tasks} />
          <TasksList listTitle={'Done'} tasks={tasks} />
        </div>
      </div>
    </>
  )
}

export default EmployeeTasks
