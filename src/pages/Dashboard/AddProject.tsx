import { AddEditProjectForm } from '../../components/shared'
import {Header} from './../../components/shared'
import { FaAngleLeft } from 'react-icons/fa6'


const AddProject = () => {
  return (
    <div className='bg-light h-100'>
      <div>
        <Header
          icon={<FaAngleLeft />}
          title={'View All Projects'}
          mainTitle={'Add a New Project'}
          destination={'/dashboard/projects'}
        />
      </div>
      <div className='container pt-5'>
        <AddEditProjectForm />
      </div>
    </div>
  )
}

export default AddProject
