import { Card } from 'react-bootstrap'

interface StatsCardProps {
  title: string
  value: number
  icon: React.ReactNode
  color: string
  bgColor?: string
}

const StatsCard = ({ title, value, icon, color, bgColor }: StatsCardProps) => {
  return (
    <Card
      style={{
        width: '10rem',
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '1rem',
      }}
    >
      <Card.Body>
        <Card.Text>
          <span
            style={{
              backgroundColor: color,
              borderRadius: '10px',
              display: 'grid',
              placeItems: 'center',
              padding: '0.5rem',
              width: '2.5rem',
              height: '2.5rem',
              aspectRatio: '1',
            }}
          >
            {icon}
          </span>
        </Card.Text>
        <Card.Subtitle className='mb-2'>{title}</Card.Subtitle>
        <Card.Title>{value}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default StatsCard
