import closeIcon from '../../assets/close.png'
import { ModalContainer, MainModal, ModalContent, BotaoModal } from './styles'
import { Pratos } from '../ProductList'
import { formataPreco } from '../Utils'

type Props = {
  product: Pratos | null
  isVisible: boolean
  onClose: () => void
}

export const Modal = ({ product, isVisible, onClose }: Props) => {
  if (!isVisible || !product) return null
  return (
    <>
      <MainModal className="visivel">
        <div className="overlay" onClick={onClose}></div>
        <ModalContainer>
          <img src={closeIcon} alt="Fechar" onClick={onClose} />
          <ModalContent>
            <img src={product.foto} alt={product.nome} />
            <div>
              <h4>{product.nome}</h4>
              <p>{product.descricao}</p>
              <p>
                Serve de <span>{product.porcao}</span>
              </p>
              <BotaoModal>
                Adicionar ao Carrinho - {formataPreco(product.preco)}
              </BotaoModal>
            </div>
          </ModalContent>
        </ModalContainer>
      </MainModal>
    </>
  )
}

export default Modal
