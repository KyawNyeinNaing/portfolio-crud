import { createGlobalStyle } from 'styled-components'
import { fontSize, fontWeight, general, colors } from '../constant'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: inherit;
  }
      
  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${general.fontFamily};
    font-size: ${fontSize.md}px;
    line-height: 1.5;
    font-weight: ${fontWeight.md};
    text-align: left;
    transition: transform .3s ease;
    
    &.open-drawer {
      transform: translateX(-250px);
      height: 100vh;
      min-height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      overflow-x: initial;

      .menu-btn {
        border: 2px solid ${colors.white} !important;
        border-radius: 50% !important;

        .menu-icon {
          transform: translateX(-50px) !important;
          background: transparent !important;
          &:before,
          &:after {
            right: 6px !important;
            width: 18px !important;
          }
          &:before {
            transform: rotate(45deg) translate(35px, -35px) !important;
            background: ${colors.white} !important;
          }

          &:after {
            transform: rotate(-45deg) translate(35px, 35px) !important;
            background: ${colors.white} !important;
          }
        }
      }
    }
  }
`

export { GlobalStyle }