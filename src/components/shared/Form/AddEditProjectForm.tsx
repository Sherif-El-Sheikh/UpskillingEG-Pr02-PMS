/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useProjectsOperations from '../../../contexts/modules/projects/projectsOperations'
import { Project } from '../../../types/interfaces'
import { LoadingSpinner } from '..'

type FormData = {
  title: string
  description: string
}

interface AddEditProjectFormProps {
  project?: Project
}

const AddEditProjectForm = ({ project }: AddEditProjectFormProps) => {
  const naviate = useNavigate()
  const { addProject, updateProject } = useProjectsOperations() // Destructure the createTask function from useTasksOperations

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>()

  useEffect(() => {
    if (project) {
      setValue('title', project.title)
      setValue('description', project.description)
    }
  }, [project, setValue])

  const onSubmit = async (data: FormData) => {
    project ? await updateProject(data, project.id) : await addProject(data)
    reset()
    naviate('/dashboard/projects')
  }

  return (
    <div className='add-edit-Form container w-75 bg-white p-5 rounded-5 shadow-sm'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='formTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Title'
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && (
            <span className='text-danger'>{errors.title.message}</span>
          )}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Description'
            rows={4}
            {...register('description', {
              required: 'Description is required',
            })}
          />
          {errors.description && (
            <span className='text-danger'>{errors.description.message}</span>
          )}
        </Form.Group>

        

        <div className='mt-5 pt-4 border-top d-flex justify-content-between'>
          <Button className='px-4 py-2 rounded-5' variant='outline-dark'>
            <Link
              className='text-reset text-decoration-none'
              to='/dashboard/projects'
            >
              Cancel
            </Link>
          </Button>

          <Button
            type='submit'
            className='submit-btn px-4 py-2 rounded-5 text-white text-decoration-none'
            variant='link'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <LoadingSpinner loadingTxt={project ? 'Updating' : 'Adding'} />
            ) : project ? (
              'Update Project'
            ) : (
              'Add Project'
            )}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddEditProjectForm
