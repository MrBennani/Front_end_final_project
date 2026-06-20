import { useParams } from 'react-router-dom'
import BannerPerfil from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
// import { useEffect, useState } from 'react'
// import { Restaurants } from '../../components/Models/Restaurants'
import { useGetPratosQuery } from '../../services/api'

export const Perfil = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: prato } = useGetPratosQuery(id!)

  if (!prato) {
    return <h4>Carregando cardapio...</h4>
  }

  return (
    <>
      <Header />
      <BannerPerfil titulo={prato.titulo} tipo={prato.tipo} capa={prato.capa} />
      <ProductList prato={prato.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
