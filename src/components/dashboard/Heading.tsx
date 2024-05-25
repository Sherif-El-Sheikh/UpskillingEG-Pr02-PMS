const Heading = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className='w-100 border-start border-4 border-warning py-0 px-2'>
      <h3>{title}</h3>
      <span className='text-muted fw-semibold'>{description}</span>
    </div>
  )
}

export default Heading
