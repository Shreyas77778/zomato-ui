// components/RestaurantCard.js
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

const RestaurantCard = ({ restaurant }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="restaurant-card">
      <div className="card-header">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          loading="lazy"
        />
        <button 
          className="favorite-btn"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
        {restaurant.offer && (
          <div className="offer-badge">
            {restaurant.offer}
          </div>
        )}
      </div>
      <div className="card-body">
        <h3>{restaurant.name}</h3>
        <div className="rating-container">
          <FaStar color="#FFD700" />
          <span>{restaurant.rating}</span>
          <span>({restaurant.reviews})</span>
        </div>
        <div className="cuisine">
          {restaurant.cuisine.join(', ')}
        </div>
        <div className="delivery-info">
          <FiClock />
          <span>{restaurant.deliveryTime} mins</span>
          <span>•</span>
          <span>₹{restaurant.costForTwo} for two</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;