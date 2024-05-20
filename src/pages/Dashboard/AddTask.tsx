import { AddEditTasksForm } from '../../components/shared'
import Header from './../../components/shared/Header'
import { FaAngleLeft } from 'react-icons/fa6'
function AddTask() {
  return (
    <>
      <div className=''>
        <Header
          icon={<FaAngleLeft />}
          title={'View All Tasks'}
          mainTitle={'Add a New Task'}
        />
      </div>
      <div className='container pt-5'>
        <AddEditTasksForm />
      </div>
    </>
  )
}

export default AddTask
