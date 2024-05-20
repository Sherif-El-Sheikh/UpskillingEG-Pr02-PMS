/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useProjectsContext } from '../../contexts/modules/projects/projectsContext'
import useProjectsOperations from '../../contexts/modules/projects/projectsOperations'
import {
  CustomPagination,
  DataTable,
  LoadingScreen,
} from '../../components/shared'
// icons
import { CiEdit, CiSearch } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom'
// Model Delete
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import deleteAvatar from '../../assets/images/no-data.png'

function Projects() {
  const [showDelete, setShowDelete] = useState(false);
  const[projectsMangerId, setProjectsMangerId] = useState(0);
  const {
    getManagerProjects,
    setManagerProjectsPagination,
    setManagerProjectsTitleFilter,
    deleteProject
  } = useProjectsOperations()
  const { state: projectsState } = useProjectsContext()
  useEffect(() => {
    getManagerProjects(
      projectsState.managerPageNumber,
      projectsState.managerPageSize,
      projectsState.managerTitle
    )
  }, [
    projectsState.managerPageNumber,
    projectsState.managerPageSize,
    projectsState.managerTitle,
  ])
  // Model Delete
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = (id: number) =>{
    setProjectsMangerId(id);
    setShowDelete(true);
    }
    
  const columns = ['Title', 'Description', 'DreationDate']
  return (
    <>
      <div className='header d-flex justify-content-between align-items-center p-4 bg-white pb-5 px-5'>
        <h1 className=' ps-4'>Projects</h1>
        <button className='btn  submit-btn w-25 me-4 h-25 rounded-4 text-white'>
          + Add New Project
        </button>
      </div>
      <div className=' bg-white col-10  col-md-8 col-lg-11 me-auto ms-auto shadow-lg mt-5 p-4 rounded-3'>
        <div className=' position-relative'>
          <CiSearch className=' position-absolute mt-3 ms-2' />
          <input
            type='text'
            className=' rounded-4 p-2 ps-5 form-check-input w-25 h-100 mb-5'
            placeholder='Search By Title'
            onChange={(e) => setManagerProjectsTitleFilter(e.target.value)}
          />
        </div>
        <DataTable tableColumns={columns}>
          {projectsState.managerProjects.map((project, index) => (
            <>
              {projectsState.loading ? (
                <LoadingScreen />
              ) : (
                <tr key={index}>
                  <th>{++index}</th>
                  <th>{project.title}</th>
                  <th>{project.description}</th>
                  <th>{new Date(project.creationDate).toLocaleDateString()}</th>
                  <th className=' d-flex justify-content-center gap-3 '>
                    <CiEdit
                      fontSize={24}
                      className='text-warning cursor-pointer'
                    />
                    <MdDeleteOutline
                      fontSize={24}
                      className='text-danger cursor-pointer'
                      onClick={()=> handleDeleteShow(project.id)}
                    />
                    <Link to={/dashboard/projectde/${project.id}}>
                    <FaEye
                      fontSize={24}
                      className='text-info cursor-pointer'
                    /></Link>
                  </th>
                </tr>
              )}
            </>
          ))}
        </DataTable>
        {projectsState.totalNumberOfRecords > 10 ? (
          <CustomPagination
            pageNumber={projectsState.pageNumber}
            pageSize={projectsState.pageSize}
            totalNumberOfRecords={projectsState.totalNumberOfRecords}
            setPagination={setManagerProjectsPagination}
          />
        ) : (
          ''
        )}
      </div>
      {/*  Model Delete */}
      <Modal show={showDelete} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <h3 className='modalTitle'>Delete Project</h3>
        </Modal.Header>
        <Modal.Body>
        <div className='text-center deleteData'>
            <img src={deleteAvatar} className='img-fluid mb-3' alt="delete Avatar" />
            <h5 className='mb-2'>Delete This Project ?</h5>
            <p>are you sure you want to delete this item ? if you are sure just click on delete it</p>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=> {deleteProject(projectsMangerId), handleDeleteClose()}} className='delete'>Delete this item
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Projects
