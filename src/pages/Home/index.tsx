import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantLIst'
import { Restaurants } from '../../components/Models/Restaurants'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
