import styled from 'styled-components'
import { rgba } from 'polished'
import { fontSize, fontWeight, general, colors } from '../constant'

const Button = styled.button`
  cursor: pointer;
  min-width: 150px;
  min-height: 50px;
  padding: 0 20px;
  display: inline-block;
  border: 2px solid transparent;
  border-radius: var(--radius);
  text-align: center;
  color: ${colors.black};
  font-size: ${fontSize.md}px;
  transition: box-shadow .15s ease;
  outline: 0;
  &:hover {
    box-shadow: 0 2px 5px 0 ${rgba(colors.black, .1)}, 0 2px 10px 0 ${rgba(colors.black, .06)};
  }
  &.primary {
    border: ${general.border} ${colors.primary};
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;

    &:hover {
      background-color: ${rgba(colors.primary, .7)};
      border-color: ${rgba(colors.primary, .7)};
    }
  }
  &.secondary {
    border: ${general.border} ${colors.light};
    background-color: ${colors.light};
    color: ${colors.primary};

    &:hover {
      background-color: ${colors.bgColor};
      border-color: ${colors.bgColor};
    }
  }
  &.with-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 20px;
      margin-right: 10px;
      transition: color .15s ease-in-out;
    }

    &:hover {
      svg {
        color: ${colors.white};
      }
    }
  }
  &.outline-primary {
    color: ${colors.primary};
    border: 2px solid ${colors.primary};
    background-color: ${colors.white};

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.white};
    }

    svg {
      color: ${colors.primary};
    }
  }
  &.outline-secondary {
    color: ${colors.black};
    border: 2px solid ${colors.primary};
    border-radius: 0;
    background-color: ${colors.white};

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
  &.product-btn {
    overflow: hidden;
    position: relative;
    height: 40px;

    &:hover {
      span {
        transform: translateY(-100px);
      }

      svg {
        transform: translateY(-31px);
      }
    }

    span {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform .3s ease;
    }

    svg {
      font-size: 26px;
      transform: translateY(100px);
      transition: transform .3s ease;
      pointer-events: none;
    }
  }
  &.read-more {
    min-width: auto;
    padding: 0;
    border: 0;
    outline: 0;
    background: 0;
    box-shadow: none;
    color: ${colors.primary};
    text-transform: uppercase;
    font-weight: ${fontWeight.xl};

    &:hover {
      box-shadow: none;
    }

    svg {
      color: ${colors.primary};
      pointer-events: none;
    }
  }
  &.btn-link {
    color: ${colors.primary};
    background-color: transparent !important;
    border: none;
    span {
      border-bottom: 1px solid ${colors.primary};
    }
    &:hover {
      border: none;
      box-shadow: none;
    }
  }
  &.btn-disabled {
    opacity: .5;
    cursor: default;
    background-color: ${colors.primary};
    &:hover {
      background-color: ${colors.primary};
      border: none;
    }
    span {
      cursor: default !important;
    }
  }
`
export { Button }