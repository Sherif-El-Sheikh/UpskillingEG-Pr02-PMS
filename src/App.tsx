// react-router-dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Pages
import {
  ForgotPassPage,
  LoginPage,
  RegisterPage,
  ResetPassPage,
  VerifyPassPage,
} from './pages/Auth'
import {
  AddProject,
  AddTask,
  EditProject,
  EditTask,
  Home,
  ProjectDetails,
  Projects,
  Tasks,
  Users,
} from './pages/Dashboard'
// RouteGuard and Layouts
import { RouteGuard } from './components/shared'
import { AuthLayoutWrapper, MasterLayout } from './layouts'
import Notfound from './pages/Notfound/Notfound'

function App() {
  // auth context

  // router
  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: (
        <RouteGuard>
          <MasterLayout />
        </RouteGuard>
      ),
      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'projects',
          element: <Projects />,
        },
        {
          path: 'tasks',
          element: <Tasks />,
        },
        {
          path: 'users',
          element: <Users />,
        },
        {
          path: 'addTask',
          element: <AddTask />,
        },
        {
          path: 'editTask/:id',
          element: <EditTask />,
        },
        {
          path: 'addProject',
          element: <AddProject />,
        },
        {
          path: 'editProject/:id',
          element: <EditProject />,
        },
        {
          path: 'project/:id',
          element: <ProjectDetails />,
        },
      ],
    },
    {
      path: '/',
      element: <AuthLayoutWrapper />,
      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
        {
          path: 'forgot-password',
          element: <ForgotPassPage />,
        },
        {
          path: 'verify-password',
          element: <VerifyPassPage />,
        },
        {
          path: 'reset-password',
          element: <ResetPassPage />,
        },
      ],
    },
  ])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
