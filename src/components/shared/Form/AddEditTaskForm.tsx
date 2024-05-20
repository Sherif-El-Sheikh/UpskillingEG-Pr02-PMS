/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useListsForForms } from '../../../contexts/global/ListsForForms'
import useTasksOperations from '../../../contexts/modules/tasks/tasksOperations'
import { Task } from '../../../types/interfaces'
import { LoadingSpinner } from '..'

type FormData = {
  title: string
  description: string
  employeeId: number
  projectId: number
}

interface AddEditTasksFormProps {
  task?: Task
}

const AddEditTasksForm: React.FC = ({ task }: AddEditTasksFormProps) => {
  const naviate = useNavigate()
  const { allProjects, allUsers } = useListsForForms()
  const { createTask, updateTask } = useTasksOperations() // Destructure the createTask function from useTasksOperations

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>()

  useEffect(() => {
    if (task) {
      setValue('title', task.title)
      setValue('description', task.description)
      task.employee && setValue('employeeId', task.employee.id)
      task.project && setValue('projectId', task.project.id)
    }
  }, [task, setValue])

  const onSubmit = async (data: FormData) => {
    task ? await updateTask(data, task.id) : await createTask(data)
    reset()
    naviate('/dashboard/tasks')
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

        <div className='row'>
          <div className='col-md-6 mt-2'>
            <Form.Label>User</Form.Label>
            <Form.Select
              {...register('employeeId', {
                required: 'User is required',
              })}
            >
              <option value=''>No Users Selected</option>
              {allUsers.map((user: any) => (
                <option key={user.id} value={user.id}>
                  {user.userName}
                </option>
              ))}
            </Form.Select>
            {errors.employeeId && (
              <span className='text-danger'>{errors.employeeId.message}</span>
            )}
          </div>

          <div className='col-md-6 mt-2'>
            <Form.Label>Project</Form.Label>
            <Form.Select
              {...register('projectId', { required: 'Project is required' })}
            >
              <option value=''>No Projects Selected</option>
              {allProjects.map((project: any) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </Form.Select>
            {errors.projectId && (
              <span className='text-danger'>{errors.projectId.message}</span>
            )}
          </div>
        </div>

        <div className='mt-5 pt-4 border-top d-flex justify-content-between'>
          <Button className='px-4 py-2 rounded-5' variant='outline-dark'>
            <Link
              className='text-reset text-decoration-none'
              to='/dashboard/tasks'
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
              <LoadingSpinner loadingTxt={task ? 'Updating' : 'Adding'} />
            ) : task ? (
              'Update Task'
            ) : (
              'Add Task'
            )}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddEditTasksForm
