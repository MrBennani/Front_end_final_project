import { useFormik } from 'formik'
import Button from '../Button'
import { PaymentContainer, PaymentSideBar, InputGroup, Row } from './styles'
import * as Yup from 'yup'

type Props = {
  isVisible: boolean
}

const Payment = ({ isVisible }: Props) => {
  const form = useFormik({
    initialValues: {
      cardname: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Yup.object({
      cardname: Yup.string()
        .min(16, 'O campo precisa ter no minimo 5 caracteres')
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
        .min(5, 'O campo precisa ter 5 caracteres')
        .min(5, 'O campo precisa ter 5 caracteres')
        .required('O campo é obrigatorio'),
      cardYear: Yup.string()
        .min(5, 'O campo precisa ter 5 caracteres')
        .min(5, 'O campo precisa ter 5 caracteres')
        .required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isChanged && isInvalid) return message
    return ''
  }

  return (
    <PaymentContainer className={isVisible ? 'is-open' : ''}>
      <PaymentSideBar>
        <h4>Pagamento - Valor a pagar R$ 0,00</h4>
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
              />
              <small>{getErrorMessage('cardname', form.errors.cardname)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <Row>
                <label htmlFor="cardNumber">Número do cartão</label>
                <label htmlFor="cardCode">CVV</label>
              </Row>
              <Row>
                <input
                  id="cardNumber"
                  type="number"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardNumber', form.errors.cardNumber)}
                </small>
                <input
                  id="cardCode"
                  type="number"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardCode', form.errors.cardCode)}
                </small>
              </Row>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <Row>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <label htmlFor="cardYear">Ano de vencimento</label>
              </Row>
              <Row>
                <input
                  id="cardMonth"
                  type="text"
                  value={form.values.cardMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardMonth', form.errors.cardMonth)}
                </small>
                <input
                  id="cardYear"
                  type="text"
                  value={form.values.cardYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardYear', form.errors.cardYear)}
                </small>
              </Row>
            </InputGroup>
          </Row>
          <Row>
            <section>
              <Button
                variant="secondary"
                type="button"
                title="Finalizar pagamento"
              >
                Finalizar pagamento
              </Button>
              <Button
                variant="secondary"
                type="button"
                title="Voltar para a edição de endereço"
              >
                Voltar para a edição de endereço
              </Button>
            </section>
          </Row>
        </form>
      </PaymentSideBar>
    </PaymentContainer>
  )
}

export default Payment
