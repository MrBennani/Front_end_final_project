import styled from 'styled-components'
import { breackpoints, cores } from '../../styles'

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
  }
`
