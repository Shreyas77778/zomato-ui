import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaStar, FaHeart } from 'react-icons/fa'

const Card = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  background: white;
`

export const RestaurantCard = ({ restaurant }) => {
  return (
    <Card whileHover={{ y: -5 }}>
      <img 
        src={restaurant.image} 
        alt={restaurant.name}
        style={{ width: '100%', height: '160px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3>{restaurant.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <FaStar color="#FFD700" />
          <span>{restaurant.rating}</span>
        </div>
      </div>
    </Card>
  )
}