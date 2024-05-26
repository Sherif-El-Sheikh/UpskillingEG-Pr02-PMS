import { Task } from '../../types/interfaces'
import { TaskCard } from './'

type ListStatus = 'ToDo' | 'InProgress' | 'Done'

interface TaskListProps {
  listTitle: string
  listStatus: ListStatus
  tasks: Task[]
  hoveredOverList: ListStatus | null
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  setHoveredOverList: React.Dispatch<React.SetStateAction<ListStatus | null>>
}

const TasksList = ({
  listTitle,
  tasks,
  listStatus,
  setTasks,
  hoveredOverList,
  setHoveredOverList,
}: TaskListProps) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('id')
    const task = tasks.find((task) => task.id === parseInt(id))
    if (task) {
      task.status = listStatus
      setTasks([...tasks])
      // todo - update task status in backend && Refetch tasks
    }
    setHoveredOverList(null)
  }
  const handleDragEnter = (status: ListStatus) => {
    setHoveredOverList(status)
  }
  return (
    <>
      <div className='col-sm-12 col-md-3'>
        <h4 className='mb-4'>{listTitle}</h4>
        <div
          onDragEnter={() => handleDragEnter(listStatus)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}
          className={`rounded-3 thead-color shadow-sm p-3 d-flex flex-column gap-3 
            ${hoveredOverList == listStatus && 'hoverdOverList'}
          `}
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
