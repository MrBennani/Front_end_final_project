import { Categoria, Imagem, TituloBanner } from './styles'

type Props = {
  titulo: string
  tipo: string
  capa: string
}

const BannerPerfil = ({ titulo, tipo, capa }: Props) => (
  <Imagem style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <Categoria>{tipo}</Categoria>
      <TituloBanner>{titulo}</TituloBanner>
    </div>
  </Imagem>
)

export default BannerPerfil
