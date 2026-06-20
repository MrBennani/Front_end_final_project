import Estrela from '../../assets/estrela.png'
import {
  CardContainer,
  CardContent,
  CardImage,
  Descricao,
  TagsContainer,
  TituloContainer
} from './styles'
import Tag from '../Tag'
import { ButtonLinkRC } from '../Button/styles'

type Props = {
  id: number
  title: string
  rating: number
  category: string
  image: string
  description: string
  infos: string[]
}

const RestaurantCard = ({
  id,
  title,
  rating,
  image,
  description,
  infos
}: Props) => (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <TagsContainer>
      {infos?.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagsContainer>
    <CardContent>
      <TituloContainer>
        <h3>{title}</h3>
        <div>
          <span>{rating}</span>
          <img src={Estrela} alt="estrela" />
        </div>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <ButtonLinkRC
        type="link"
        to={`/Perfil/${id}`}
        title={'Clique aqui para saber mais'}
      >
        Saiba mais
      </ButtonLinkRC>
    </CardContent>
  </CardContainer>
)

export default RestaurantCard
