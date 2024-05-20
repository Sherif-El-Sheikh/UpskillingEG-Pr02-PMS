/* eslint-disable react-hooks/exhaustive-deps */
import { AddEditTasksForm } from '../../components/shared'
import { Header, LoadingScreen } from './../../components/shared/'
import { FaAngleLeft } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useTasksOperations from '../../contexts/modules/tasks/tasksOperations'
import { useTasksContext } from '../../contexts/modules/tasks/tasksContext'

const EditTask = () => {
  const { id } = useParams<{ id: string }>()

  const { getTaskById } = useTasksOperations()

  useEffect(() => {
    id && getTaskById(id)
  }, [id])

  const { state } = useTasksContext()

  return (
    <div className='bg-light h-100'>
      <div>
        <Header
          icon={<FaAngleLeft />}
          title={'View All Tasks'}
          mainTitle={`Edit Task #${id}`}
          destination={'/dashboard/tasks'}
        />
      </div>
      <div className='container pt-5'>
        {state.loading ? (
          <div className='w-100 h-100 my-5 py-5 d-flex flex-column justify-content-center align-items-center gap-3'>
            <LoadingScreen />
          </div>
        ) : (
          <AddEditTasksForm task={state.selectedTask} />
        )}
      </div>
    </div>
  )
}

export default EditTask
