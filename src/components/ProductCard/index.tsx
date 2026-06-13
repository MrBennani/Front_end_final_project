import { BotaoAdicionar, Card, Descricao, Foto, Titulo } from './styles'

type Props = {
  id: number
  name: string
  photo: string
  description: string[]
  onOpen: () => void
}

const ProductCard = ({ name, photo, description, onOpen }: Props) => (
  <Card>
    <Foto src={photo} alt={name} />
    <Titulo>{name}</Titulo>
    <Descricao>{description}</Descricao>
    <BotaoAdicionar onClick={onOpen}>Saiba mais</BotaoAdicionar>
  </Card>
)

export default ProductCard
