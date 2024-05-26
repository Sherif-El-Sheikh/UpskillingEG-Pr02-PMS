import { Task } from '../../types/interfaces'
import { TaskCard } from './'

interface TaskListProps {
  listTitle: string
  listStatus: 'ToDo' | 'InProgress' | 'Done'
  tasks: Task[]
  setTasks?: React.Dispatch<React.SetStateAction<Task[]>>
}

const TasksList = ({ listTitle, tasks, listStatus, setTasks }: TaskListProps) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('id')
    const task = tasks.find((task) => task.id === parseInt(id))
    if (task) {
      task.status = listStatus
      setTasks && setTasks([...tasks])
      // todo - update task status in backend
    }
  }
  return (
    <>
      <div className='col-sm-12 col-md-3'>
        <h4 className='mb-4'>{listTitle}</h4>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}
          className='rounded-3 thead-color shadow-sm p-3 d-flex flex-column gap-3'
        >
          {tasks
            .filter((task) => task.status === listStatus)
            .map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
      </div>
    </>
  )
}

export default TasksList
