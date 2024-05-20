/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { CustomPagination, DataTable, NoData } from '../../components/shared'
import { useTasksContext } from '../../contexts/modules/tasks/tasksContext'
import useTasksOperations from '../../contexts/modules/tasks/tasksOperations'

// icons
import { IoFilterOutline } from 'react-icons/io5'
import { FaEye, FaEdit, FaTrashAlt, FaSearch } from 'react-icons/fa'

import { Link } from 'react-router-dom'

function Tasks() {
  const {
    setManagerTasksPagination,
    setManagerTasksTitleFilter,
    getManagerTasks,
  } = useTasksOperations()

  const { state: taskState } = useTasksContext()

  useEffect(() => {
    getManagerTasks(
      taskState.managerPageNumber,
      taskState.managerPageSize,
      taskState.managerTitle,
      taskState.managerStatus
    )
  }, [
    taskState.managerPageNumber,
    taskState.managerPageSize,
    taskState.managerTitle,
    taskState.managerStatus,
  ])

  const columns = ['Title', 'Status', 'User', 'Project', 'Date']

  return (
    <>
      <div className='d-flex justify-content-between align-items-center bg-white shadow-sm p-3 '>
        <h2>Tasks</h2>
        <Link
          className='btn submit-btn px-3 rounded-5 text-white'
          to={'/dashboard/addTask'}
        >
          + Add New Task
        </Link>
      </div>
      <div className='bg-white col-11 mx-auto shadow-lg mt-5 p-4 rounded-3'>
        <div className='d-flex align-items-center mb-5 gap-3'>
          <input
            type='text'
            className='rounded-5 p-2 ps-5 form-check-input w-25 h-100'
            placeholder='Search By Title'
            onChange={(e) => setManagerTasksTitleFilter(e.target.value)}
          />
          <div className='border p-2 rounded-5 d-flex align-items-center gap-2'>
            <IoFilterOutline fontSize={25} />
            Filter
          </div>
        </div>
        <DataTable tableColumns={columns}>
          {taskState.managerTasks.map((task, index) => (
            <>
              {taskState.managerTasks.length > 0 ? (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.status}</td>
                  <td>{task.employee?.userName}</td>
                  <td>{task.project?.title}</td>
                  <td>{new Date(task.creationDate).toLocaleDateString()}</td>
                  <td>
                    <div
                      role='button'
                      className=' d-flex justify-content-center align-items-center gap-2 '
                    >
                      <FaEdit className='text-warning cursor-pointer' />
                      <FaTrashAlt
                        className='text-danger cursor-pointer'
                        size={14}
                        // onClick={() => handleDeleteShow(project.id)}
                      />
                      <Link to={`/dashboard/project/${task.id}`}>
                        <FaEye className='text-success cursor-pointer' />
                      </Link>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td colSpan={8}>
                    <NoData />
                  </td>
                </tr>
              )}
            </>
          ))}
        </DataTable>
        {taskState.managerTotalNumberOfRecords > 10 && (
          <CustomPagination
            pageNumber={taskState.managerPageNumber}
            pageSize={taskState.managerPageSize}
            totalNumberOfRecords={taskState.managerTotalNumberOfRecords}
            setPagination={setManagerTasksPagination}
          />
        )}
      </div>
    </>
  )
}
export default Tasks
