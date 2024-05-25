import { useAuthContext } from "../../contexts/global/AuthContext"

const Home = () => {
  const { userData } = useAuthContext()
  return (
    <div className='p-4'>
      <div className='banner d-flex flex-column justify-content-center align-items-start text-white fs-4 p-3'>
        <span className='z-3'>
          Hello <span className=" text-warning">{userData.userName}</span>, welcome to your dashboard
        </span>
        <p className='z-3 mt-2'>You can add projects and assign tasks to your team.</p>
      </div>
      <div className='charts'></div>
    </div>
  )
}

export default Home
