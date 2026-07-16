import { MoonLoader } from 'react-spinners'
import { Container } from './styles'
import { cores } from '../../styles'

const Loader = () => {
  return (
    <>
      <Container>
        <MoonLoader color={cores.salmao} />
      </Container>
    </>
  )
}

export default Loader
