import styled from 'styled-components'
import { colors } from './constant'

const Dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${colors.white};
  animation: 1s bounce infinite alternate;
  margin-right: 6px;

  &:last-child {
    margin-right: 0;
  }

  &:nth-child(2) {
    animation-delay: .3s;
  }

  &:nth-child(3) {
    animation-delay: .6s;
  }
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;

  @keyframes bounce {
    to {
      opacity: .3;
      transform: translate3d(0, -4px, 0);
    }
  }
`

const Loading = () => {
  return (
    <>
      <LoadingWrapper>
        <Dot />
        <Dot />
        <Dot />
      </LoadingWrapper>
    </>
  )
}

export { Loading }