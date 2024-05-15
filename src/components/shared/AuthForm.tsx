import Logo from '../../assets/images/PMS 3.svg'

const AuthForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Logo */}
      <div className='text-center mb-4'>
        <img src={Logo} alt='logo' className='img-fluid logo' />
      </div>
      {/* Form */}
      <div className='row auth-form p-5 rounded rounded-5'>
        <span>Welcome to PMS</span>
        {children}
      </div>
    </>
  )
}

export default AuthForm
