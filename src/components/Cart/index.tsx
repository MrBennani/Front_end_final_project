import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { CartContainer, Overlay, SideBar, CartItem, Price } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getValorTotal = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <div className="close-button"></div>
        {items.map((item) => (
          <CartItem key={item.id}>
            <button onClick={() => removeItem(item.id)} />
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <p>{formataPreco(item.preco)}</p>
            </div>
          </CartItem>
        ))}
        <ul></ul>
        <Price>
          <p>Valor total</p>
          <p>{formataPreco(getValorTotal())}</p>
        </Price>
        <Button
          variant="secondary"
          type="button"
          title="Clique para continuar com a entrega"
        >
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
