import { AddEditTasksForm } from '../../components/shared'
import Header from './../../components/shared/Header'
import { FaAngleLeft } from 'react-icons/fa6'
function AddTask() {
  return (
    <div className='bg-light h-100'>
      <div>
        <Header
          icon={<FaAngleLeft />}
          title={'View All Tasks'}
          mainTitle={'Add a New Task'}
          destination={'/dashboard/tasks'}
        />
      </div>
      <div className='container pt-5'>
        <AddEditTasksForm />
      </div>
    </div>
  )
}

export default AddTask
