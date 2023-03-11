import { Container } from '../../style'

const Button = ({
  width,
  height,
  cl,
  bg,
  radius,
  active,
  hover,
  onClick,
  children,
}) => {
  return (
    <Container
      w={width}
      h={height}
      color={cl}
      background={bg}
      radius={radius}
      active={active}
      hover={hover}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default Button
