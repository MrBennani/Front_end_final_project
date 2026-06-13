import { useState } from 'react'
import ProductCard from '../ProductCard'
import { ListContainer } from './styles'
import { Prato } from '../Models/Restaurants'
import { Modal } from '../Modal'

export interface Pratos {
  id: number
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
}

type Props = {
  prato: Prato[]
}

export const ProductList = ({ prato }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as Prato | null
  })

  if (!prato || prato.length === 0) {
    return <h3 className="container">Carregando...</h3>
  }

  return (
    <>
      <div className="container">
        <ListContainer>
          {prato.map((prato) => (
            <ProductCard
              id={prato.id}
              key={prato.id}
              name={prato.nome}
              photo={prato.foto}
              description={
                prato.descricao.length
                  ? [prato.descricao.slice(0, 150) + '...']
                  : [prato.descricao]
              }
              onOpen={() => setModal({ isVisible: true, data: prato })}
            />
          ))}
        </ListContainer>
        <Modal
          product={modal.data}
          isVisible={modal.isVisible}
          onClose={() => setModal({ isVisible: false, data: null })}
        />
      </div>
    </>
  )
}

export default ProductList
