import TasksList from './TasksList'

const EmployeeTasks = () => {
  return (
    <>
      <div className='bg-white shadow-sm p-3 '>
        <h2>Task Board</h2>
      </div>
      <div className='continer mt-3 overflow-hidden'>
        <div className='row gap-sm-2 gap-md-5 justify-content-center'>
          <TasksList />
          <TasksList />
          <TasksList />
        </div>
      </div>
    </>
  )
}

export default EmployeeTasks
