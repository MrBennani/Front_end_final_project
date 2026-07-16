import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantLIst'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantsList } = useGetRestaurantsQuery()

  if (!restaurantsList) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantsList} />
      <Footer />
    </>
  )
}

export default Home
