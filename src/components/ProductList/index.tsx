import { useState } from 'react'
import Products from '../../models/Products'
import food from '../../assets/foodImage.png'
import closeIcon from '../../assets/close.png'
import ProductCard from '../ProductCard'
import {
  ListContainer,
  ModalContainer,
  MainModal,
  ModalContent,
  BotaoModal
} from './styles'

export type Props = {
  products: Products[]
}

const ProductList = ({ products }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <div className="container">
        <ListContainer>
          {products.map((products) => (
            <ProductCard
              key={products.id}
              name={products.name}
              photo={products.photo}
              description={products.description}
              onOpen={() => setModalIsOpen(true)}
            />
          ))}
        </ListContainer>
        <MainModal className={modalIsOpen ? 'visivel' : ''}>
          <div className="overlay">
            <ModalContainer>
              <img
                src={closeIcon}
                alt="Fechar"
                onClick={() => setModalIsOpen(false)}
              />
              <ModalContent>
                <img src={food} alt="Produto" />
                <div>
                  <h4>Nome do Produto</h4>
                  <p>Descrição detalhada do produto.</p>
                  <p>serve ate 5 pessoas</p>
                  <BotaoModal>Adicionar ao Carrinho</BotaoModal>
                </div>
              </ModalContent>
            </ModalContainer>
          </div>
        </MainModal>
      </div>
    </>
  )
}

export default ProductList
