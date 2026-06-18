import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { store } from './store'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil/:id" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
