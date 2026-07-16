import { useParams } from 'react-router-dom'
import BannerPerfil from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { useGetPratosQuery } from '../../services/api'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

type GameParams = {
  id: string
}

export const Perfil = () => {
  const { id } = useParams() as GameParams
  const { data: prato } = useGetPratosQuery(id)

  if (!prato) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <BannerPerfil titulo={prato.titulo} tipo={prato.tipo} capa={prato.capa} />
      <ProductList prato={prato.cardapio} />
      <Cart />
      <Footer />
    </>
  )
}

export default Perfil
