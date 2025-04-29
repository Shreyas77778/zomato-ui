import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRestaurants } from '../features/restaurants/restaurantsSlice'
import { RestaurantCard } from '../components/restaurant/RestaurantCard'
import { Button } from '../components/core/Button'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

export const HomePage = () => {
  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.restaurants.list)

  useEffect(() => {
    // Mock data - replace with API call
    const mockRestaurants = [
      { id: 1, name: 'Burger Palace', rating: 4.5, image: '/burger.jpg' },
      { id: 2, name: 'Pizza Heaven', rating: 4.2, image: '/pizza.jpg' }
    ]
    dispatch(setRestaurants(mockRestaurants))
  }, [dispatch])

  return (
    <Container>
      <h1>Discover Restaurants</h1>
      <Button>Filter</Button>
      <Grid>
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
    </Container>
  )
}