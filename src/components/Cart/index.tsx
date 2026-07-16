import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import {
  CartContainer,
  Overlay,
  SideBar,
  CartItem,
  Price,
  ConclusionContainer,
  CheckoutContainer,
  CheckoutSideBar,
  InputGroupCheckout,
  RowCheckout,
  PaymentContainer,
  PaymentSideBar,
  InputGroup,
  Row
} from './styles'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { formataPreco } from '../Utils'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

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

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zip: '',
      number: '',
      more: '',
      cardname: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ser maior')
        .required('O campo é obrigatorio'),
      address: Yup.string()
        .min(10, 'O nome da rua precisa ter mais caracteres')
        .required('O campo é obrigatorio'),
      city: Yup.string()
        .min(5, 'O nome da cidade precisa ter mais caracteres')
        .required('O campo é obrigatorio'),
      zip: Yup.string()
        .min(9, 'o campo precisa ter 9 caracteres')
        .max(9, 'o campo precisa ter 9 caracteres')
        .required('O campo é obrigatorio'),
      number: Yup.number()
        .min(2, 'o campo esta incompleto')
        .required('O campo é obrigatorio'),
      more: Yup.string(),
      cardname: Yup.string()
        .min(15, 'O campo precisa ter no minimo 15 caracteres')
        .required('O campo é obrigatorio'),
      cardNumber: Yup.number()
        .min(16, 'O campo precisa ter 16 caracteres')
        .min(16, 'O campo precisa ter 16 caracteres')
        .required('O campo é obrigatorio'),
      cardCode: Yup.number()
        .min(3, 'O campo precisa ter 3 caracteres')
        .min(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatorio'),
      cardMonth: Yup.string()
        .min(2, 'O campo precisa ter 5 caracteres')
        .min(2, 'O campo precisa ter 5 caracteres')
        .required('O campo é obrigatorio'),
      cardYear: Yup.string()
        .min(2, 'O campo precisa ter 5 caracteres')
        .min(2, 'O campo precisa ter 5 caracteres')
        .required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        deliver: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zip,
            number: Number(values.number),
            complement: values.more
          }
        },
        payment: {
          card: {
            name: values.cardname,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isChanged && isInvalid

    return hasError
  }

  const [cartForward, setCartForward] = useState(false)
  const [checkoutForward, setCheckoutForward] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <SideBar>
          {items.length > 0 ? (
            <>
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
              <Price>
                <p>Valor total</p>
                <p>{formataPreco(getValorTotal())}</p>
              </Price>
              <Button
                variant="secondary"
                type="button"
                title="Clique para continuar com a entrega"
                onClick={
                  items.length === 0
                    ? () => closeCart()
                    : () => setCartForward(true)
                }
              >
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <p className="warning">
              Seu carrinho está vazio, adicione produtos para continuar.
            </p>
          )}
        </SideBar>
      </CartContainer>
      <CheckoutContainer className={cartForward ? 'is-open' : ''}>
        <CheckoutSideBar>
          <h4>Entrega</h4>
          <form onSubmit={form.handleSubmit}>
            <RowCheckout>
              <InputGroupCheckout>
                <label htmlFor="name">Quem irá receber</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('name') ? 'error' : ''}
                />
              </InputGroupCheckout>
            </RowCheckout>
            <RowCheckout>
              <InputGroupCheckout>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
              </InputGroupCheckout>
            </RowCheckout>
            <RowCheckout>
              <InputGroupCheckout>
                <label htmlFor="city">CIdade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
              </InputGroupCheckout>
            </RowCheckout>
            <RowCheckout>
              <InputGroupCheckout>
                <label htmlFor="zip">CEP</label>
                <InputMask
                  mask="99999-999"
                  id="zip"
                  type="text"
                  name="zip"
                  value={form.values.zip}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zip') ? 'error' : ''}
                />
              </InputGroupCheckout>
              <InputGroupCheckout>
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  type="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </InputGroupCheckout>
            </RowCheckout>
            <RowCheckout>
              <InputGroupCheckout>
                <label htmlFor="more">Complemento (opcional)</label>
                <input
                  id="more"
                  type="text"
                  name="more"
                  value={form.values.more}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroupCheckout>
            </RowCheckout>
            <RowCheckout>
              <section>
                <Button
                  variant="secondary"
                  type="button"
                  title="Continuar para o pagamento"
                  onClick={() => setCheckoutForward(true)}
                >
                  Continuar para o pagamento
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  title="Voltar para o carrinho"
                  onClick={() => setCartForward(false)}
                >
                  Voltar para o carrinho
                </Button>
              </section>
            </RowCheckout>
          </form>
        </CheckoutSideBar>
      </CheckoutContainer>
      {isSuccess && data ? (
        <ConclusionContainer className={isOpen ? 'is-open' : ''}>
          <SideBar>
            <div>
              <h4>Pedido realizado - {data.orderId}</h4>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button
                variant="secondary"
                type="button"
                title="Concluir seu pedido"
                onClick={() => {
                  closeCart()
                  setCartForward(false)
                  setCheckoutForward(false)
                }}
              >
                Concluir
              </Button>
            </div>
          </SideBar>
        </ConclusionContainer>
      ) : (
        <PaymentContainer className={checkoutForward ? 'is-open' : ''}>
          <PaymentSideBar>
            <h4>Pagamento - Valor a pagar {formataPreco(getValorTotal())}</h4>
            <form onSubmit={form.handleSubmit}>
              <Row>
                <InputGroup>
                  <label htmlFor="cardname">Nome no cartão</label>
                  <input
                    id="cardname"
                    type="text"
                    name="cardname"
                    value={form.values.cardname}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardname') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    id="cardNumber"
                    type="text"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup className="cvv">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    mask="999"
                    id="cardCode"
                    type="text"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="cardMonth">Mês de vencimento</label>
                  <InputMask
                    mask="99"
                    id="cardMonth"
                    type="text"
                    value={form.values.cardMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardMonth') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardYear">Ano de vencimento</label>
                  <InputMask
                    mask="99"
                    id="cardYear"
                    type="text"
                    value={form.values.cardYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardYear') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <Row>
                <section>
                  <Button
                    variant="secondary"
                    type="button"
                    title="Finalizar pagamento"
                    onClick={() => form.handleSubmit()}
                  >
                    Finalizar pagamento
                  </Button>
                  <Button
                    variant="secondary"
                    type="button"
                    title="Voltar para a edição de endereço"
                    onClick={() => setCheckoutForward(false)}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </section>
              </Row>
            </form>
          </PaymentSideBar>
        </PaymentContainer>
      )}
    </>
  )
}

export default Cart
