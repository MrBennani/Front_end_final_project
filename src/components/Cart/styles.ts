import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import remover from '../../assets/lixeira.png'
import { breackpoints, cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }

  &.close-button {
    position: relative;
  }
`

export const CartCloseButton = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const SideBar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1001;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  p {
    color: ${cores.salmaoClaro};
    font-size: 14px;
    padding: 8px 0;
    font-weight: bold;
    line-height: 22px;
    text-align: center;
  }

  @media (max-width: ${breackpoints.mobile}) {
    width: 85%;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  ${ButtonContainer} {
    display: block;
    width: 100%;
    margin-top: 16px;
  }
`
export const CartItem = styled.div`
  background-color: ${cores.salmaoClaro};
  display: flex;
  padding: 8px 8px 12px 8px;
  position: relative;
  margin-top: 16px;

  h3 {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 18px;
  }

  button {
    background-image: url(${remover});
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-color: transparent;
    cursor: pointer;
  }
`

export const Price = styled.div`
  display: flex;
  color: ${cores.corDeFundo};
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
  margin-top: 40px;
`

//split

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }

  &.close-button {
    position: relative;
  }
`

export const CheckoutSideBar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1001;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  display: block;

  h4,
  small {
    color: ${cores.salmaoClaro};
  }

  @media (max-width: ${breackpoints.mobile}) {
    width: 85%;
  }
`

export const RowCheckout = styled.div`
  display: flex;
  column-gap: 32px;

  section {
    width: 100%;
    padding-top: 24px;

    Button {
      width: 100%;
      margin-bottom: 8px;
    }
  }
`

export const InputGroupCheckout = styled.div`
  flex: auto;

  label {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.salmaoClaro};
    display: block;
    padding: 8px 0;
  }

  input {
    background-color: ${cores.salmaoClaro};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.salmaoClaro};
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`

export const PaymentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }

  &.close-button {
    position: relative;
  }

  small {
    color: ${cores.salmaoClaro};
  }
`

export const PaymentSideBar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1001;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  display: block;

  h4 {
    color: ${cores.salmaoClaro};
    padding-bottom: 16px;
  }

  @media (max-width: ${breackpoints.mobile}) {
    width: 85%;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 32px;

  section {
    width: 100%;
    padding-top: 24px;

    Button {
      width: 100%;
      margin-bottom: 8px;
    }
  }
`

export const InputGroup = styled.div`
  flex: auto;

  &.cvv {
    max-width: 80px;
  }

  label {
    font-weight: bold;
    font-size: 14px;
    color: ${cores.salmaoClaro};
    display: block;
    padding: 8px 0;
  }

  input {
    background-color: ${cores.salmaoClaro};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.salmaoClaro};
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`

export const ConclusionContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }

  &.close-button {
    position: relative;
  }

  div {
    h4 {
      color: ${cores.salmaoClaro};
      font-weight: bold;
      font-size: 18px;
      padding: 8px 0;
    }

    &.warning {
      color: ${cores.salmaoClaro};
      font-size: 14px;
      padding: 8px 0;
    }
  }
`
