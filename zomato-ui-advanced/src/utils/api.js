import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
})

export const fetchRestaurants = async () => {
  try {
    const response = await API.get('/restaurants')
    return response.data
  } catch (error) {
    console.error('Error fetching restaurants:', error)
    throw error
  }
}