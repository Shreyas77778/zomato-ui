import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MenuItem } from '../components/restaurant/MenuItem';
import { AddToCartButton } from '../features/cart/AddToCartButton';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = useSelector(state =>
    state.restaurants.list.find(r => r.id === parseInt(id))
  );

  if (!restaurant) return <div>Restaurant not found</div>;

  return (
    <Container>
      <Header>
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          style={{ width: '300px', borderRadius: '8px' }}
        />
        <div>
          <h1>{restaurant.name}</h1>
          <p>{restaurant.cuisine.join(', ')}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>
              {restaurant.rating}
            </span>
            <span>({restaurant.reviews} reviews)</span>
          </div>
        </div>
      </Header>

      <h2>Menu</h2>
      <div style={{ marginTop: '1rem' }}>
        {restaurant.menu?.map(item => (
          <MenuItem key={item.id} item={item}>
            <AddToCartButton item={item} restaurantId={restaurant.id} />
          </MenuItem>
        ))}
      </div>
    </Container>
  );
};