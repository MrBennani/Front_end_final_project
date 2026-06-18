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
  const { data: prato } = useGetPratosQuery(id!)
  // const [prato, setPratos] = useState<Restaurants>()

  // useEffect(() => {
  //   fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setPratos(res))
  // }, [id])

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
