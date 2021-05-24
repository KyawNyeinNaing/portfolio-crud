import styled, { css } from 'styled-components'
import { fontSize, fontWeight, colors, media } from '../constant'

const Color = styled.p`
  color: ${colors.dark};
  ${({ color }) => color && css`
    color: ${colors[color]};
  `}
  ${({ bg }) => bg && css`
    background: ${colors[bg]};
  `}
`

const Text = styled(Color)`
  font-size: ${fontSize.md}px;
  font-weight: ${fontWeight.md};
  line-height: ${fontSize.md * 1.618}px;
  margin: 0;
  ${({ size }) => size && css`
    font-size: ${fontSize[size]}px;
    line-height: ${fontSize[size] * 1.618}px;
  `}
  ${({ weight }) => weight && css`
    font-weight: ${fontWeight[weight]};
  `}
`

const View = styled(Text)`
  position: relative;
`

const Title = styled(Text)`
  text-align: center;
  font-size: 36px;
  font-weight: ${fontWeight.lg};
  text-transform: uppercase;
  margin-bottom: 30px;
  span {
    color: ${colors.secondary};
  }
`;

export {
  View,
  Text,
  Title,
}