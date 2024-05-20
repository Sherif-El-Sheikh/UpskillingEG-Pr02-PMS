/* eslint-disable react-hooks/exhaustive-deps */
import { AddEditProjectForm } from '../../components/shared'
import { Header, LoadingScreen } from './../../components/shared/'
import { FaAngleLeft } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useProjectsOperations from '../../contexts/modules/projects/projectsOperations'
import { useProjectsContext } from '../../contexts/modules/projects/projectsContext'

const EditProject = () => {
  const { id } = useParams<{ id: string }>()

  const { getProjectById } = useProjectsOperations()

  useEffect(() => {
    id && getProjectById(id)
  }, [id])

  const { state } = useProjectsContext()
  return (
    <div className='bg-light h-100'>
      <div>
        <Header
          icon={<FaAngleLeft />}
          title={'View All Projects'}
          mainTitle={`Edit Project #${id}`}
          destination={'/dashboard/projects'}
        />
      </div>
      <div className='container pt-5'>
        {state.loading ? (
          <div className='w-100 h-100 my-5 py-5 d-flex flex-column justify-content-center align-items-center gap-3'>
            <LoadingScreen />
          </div>
        ) : (
          <AddEditProjectForm project={state.selectedProject} />
        )}
      </div>
    </div>
  )
}

export default EditProject
