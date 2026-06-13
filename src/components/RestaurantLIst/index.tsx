import { ListContainer } from './styles'
import RestaurantCard from '../RestaurantCard'
import { Restaurants } from '../Models/Restaurants'

const RestaurantList = ({ restaurants }: { restaurants: Restaurants[] }) => (
  <div className="container">
    <ListContainer>
      {restaurants.map((restaurants) => (
        <RestaurantCard
          key={restaurants.id}
          id={restaurants.id}
          title={restaurants.titulo}
          rating={restaurants.avaliacao}
          category={restaurants.tipo}
          image={restaurants.capa}
          description={restaurants.descricao}
          infos={
            restaurants.destacado
              ? ['Destaque da semana', restaurants.tipo]
              : [restaurants.tipo]
          }
        />
      ))}
    </ListContainer>
  </div>
)

export default RestaurantList
