import { Link } from 'react-router-dom'


interface HeaderProps {
  icon: React.ReactNode
  title: string
  mainTitle: string
  destination: string
}
const Header = ({ icon, title, mainTitle, destination }: HeaderProps) => {
  return (
    <>
      <div className='header px-5 py-3 mt-2 bg-white shadow-sm '>
        <Link
          to={destination}
          className='d-flex align-items-center gap-1 text-reset text-decoration-none'
        >
          <span>{icon}</span>
          <span className='mt-1'>{title}</span>
        </Link>
        <h4 className='fs-5'>{mainTitle}</h4>
      </div>
    </>
  )
}

export default Header
