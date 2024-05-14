import AuthContainer from './components/AuthContainer'

interface AuthLayoutProps {
  children: React.ReactNode
  bg: string
}

const AuthLayout = ({ children, bg }: AuthLayoutProps) => {
  return (
    <AuthContainer $bg={bg}>
      <div className='container-fluid'>
        <div className='auth-wrapper d-flex justify-content-center align-items-center pb-3'>
          <div className=' align-self-center'>{children}</div>
        </div>
      </div>
    </AuthContainer>
  )
}

export default AuthLayout
