import { useState } from 'react'
import { Task } from '../../types/interfaces'

const TaskCard = ({ task }: { task: Task }) => {
  const [isDragging, setIsDragging] = useState(false)
  return (
    <>
      <div
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('id', task.id.toString())
        }}
        onDragOver={() => setIsDragging(true)}
        className={`orange-bg d-flex justify-content-between w-100 mx-auto p-2 rounded-3 
          ${isDragging ? 'cursor-dragging' : 'cursor-draggable'}
        `}
      >
        <p className='text-white m-0'>{task.title}</p>
      </div>
    </>
  )
}

export default TaskCard
