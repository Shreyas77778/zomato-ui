import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RestaurantPage from './pages/RestaurantPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App