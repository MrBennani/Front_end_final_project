// import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantLIst'
// import { Restaurants } from '../../components/Models/Restaurants'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  // const [restaurants, setRestaurants] = useState<Restaurants[]>([])
  const { data: restaurantsList } = useGetRestaurantsQuery()

  // useEffect(() => {
  //   fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setRestaurants(res))
  // }, [])

  if (!restaurantsList) {
    return <h4>Carregando restaurantes...</h4>
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
