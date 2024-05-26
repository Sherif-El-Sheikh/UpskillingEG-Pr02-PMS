import { Task } from '../../types/interfaces'

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <>
      <div className='orange-bg d-flex justify-content-between w-100 p-2 rounded-3'>
        <p className='text-white m-0'>{task.title}</p>
      </div>
    </>
  )
}

export default TaskCard
