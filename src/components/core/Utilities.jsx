import styled from 'styled-components'
import { fontSize, fontWeight, colors, media } from '../constant'

const MenuIcon = styled.div`
  &.menu-btn {
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease-in-out;
    z-index: 9999;
    margin-left: 20px;
    @media screen and (min-width: ${media.lg}px) {
      display: none;
      margin-left: 0;
    }
    .menu-icon {
      width: 30px;
      height: 3px;
      background: ${colors.primary};
      border-radius: 5px;
      transition: all .2s ease-in-out;
      &:before,
      &:after {
        content: '';
        position: absolute;
        right: 0;
        width: 25px;
        height: 3px;
        background: ${colors.primary};
        border-radius: 5px;
        transition: all .2s ease-in-out;
      }

      &:before {
        transform: translateY(-8px);
      }

      &:after {
        transform: translateY(8px);
      }
    }
  }
`

const Quantity = styled.div`
  .quantity-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    > * {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
    .quantity-input-gp {
      width: 130px;
      input {
        min-height: 43px;
      }
    }
    .arrow-btn {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      svg {
        cursor: pointer;
        color: #999999;
        transform: translateY(10px);
      }
    }
  }
`

const RTEContent = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: .5rem;
    font-weight: 800;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
  ul {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    
    li {
      padding-left: 20px;
      position: relative;
    }
  }
`

const CopyrightStyled = styled.div`
  color: ${props => props?.color ? colors[props?.color] : colors.muted};
  background-color: ${props => props?.bgColor ? colors[props?.bgColor] : colors.black};
  font-size: ${fontSize.sm}px;
  font-weight: ${fontWeight.md};
  margin: 0;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  a {
    color: ${colors.white};
    text-decoration: none;
  }
`

const Copyright = props => {
  return (
    <CopyrightStyled {...props}>
      {props?.children}
      <span>© {new Date().getFullYear()} created by {props?.data}</span>
    </CopyrightStyled>
  )
}


export {
  MenuIcon,
  Quantity,
  RTEContent,
  Copyright,
}