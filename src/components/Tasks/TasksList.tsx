import { Task } from '../../types/interfaces'
import { TaskCard } from './'

interface TaskListProps {
  listTitle: string
  tasks: Task[]
}

const TasksList = ({ listTitle, tasks }: TaskListProps) => {
  return (
    <>
      <div className='col-sm-12 col-md-5 col-lg-3'>
        <h4 className='mb-4'>{listTitle}</h4>
        <div className='rounded-3 thead-color shadow-sm p-3 d-flex flex-column gap-2 '>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  )
}

export default TasksList
