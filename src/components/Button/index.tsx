import { ButtonContainer, ButtonLink, ButtonLinkRC } from './styles'

type Props = {
  type: 'link' | 'button' | 'submit'
  to?: string
  title: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary' // Propriedade de cor
}

const Button = ({
  type,
  to,
  title,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <>
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
      <ButtonLinkRC to={to as string} title={title}>
        {children}
      </ButtonLinkRC>
    </>
  )
}

export default Button
