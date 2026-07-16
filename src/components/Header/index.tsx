import { useDispatch, useSelector } from 'react-redux'
import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <img src={Logo} alt="logo" />
        <span onClick={openCart} style={{ cursor: 'pointer' }}>
          {items.length} produto(s) no carrinho
        </span>
      </div>
    </HeaderContainer>
  )
}

export default Header
