import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useListsForForms } from "../../../contexts/global/ListsForForms";
import useTasksOperations from "./../../../contexts/modules/tasks/tasksOperations";
import "./../styles/MyForm.css";

type FormData = {
  title: string;
  description: string;
  employeeId: string;
  projectId: string;
};

const MyForm: React.FC = () => {
  const { allProjects, allUsers } = useListsForForms();
  const { createTask } = useTasksOperations(); // Destructure the createTask function from useTasksOperations

  useEffect(() => {
    console.log(allProjects);
    console.log(allUsers);
  }, [allProjects, allUsers]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    createTask(data); // Use createTask function to handle form submission
    console.log(data);
  });

  return (
    <div className="MyForm container w-75 bg-white p-5 rounded-5">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Description"
            rows={2}
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </Form.Group>

        <div className="row">
          <div className="col-md-6 mt-2">
            <Form.Label>User</Form.Label>
            <Form.Select
              {...register("employeeId", {
                required: "User is required",
              })}>
              <option value="">No Users Selected</option>
              {allUsers.map((user: any) => (
                <option key={user.id} value={user.id}>
                  {user.userName}
                </option>
              ))}
            </Form.Select>
            {errors.employeeId && (
              <span className="text-danger">{errors.employeeId.message}</span>
            )}
          </div>

          <div className="col-md-6 mt-2">
            <Form.Label>Project</Form.Label>
            <Form.Select
              {...register("projectId", { required: "Project is required" })}>
              <option value="">No Projects Selected</option>
              {allProjects.map((project: any) => (
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              ))}
            </Form.Select>
            {errors.projectId && (
              <span className="text-danger">{errors.projectId.message}</span>
            )}
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <Button
              className="w-100 py-2 text-center rounded-5"
              variant="light">
              <Link className="text-black" to="/home">
                Cancel
              </Link>
            </Button>
          </div>
          <div className="col-md-6">
            <Button
              type="submit"
              className="w-100 py-2 text-center rounded-5"
              variant="warning">
              Save
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default MyForm;
