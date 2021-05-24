
import styled, { css } from 'styled-components'
import { fontSize, fontWeight, inputGeneral, colors } from '../constant'

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
  .react-datepicker-popper {
    z-index: 9;
  }
  .react-datepicker-wrapper {
    width: 100%;
    .datepicker {
      display: block;
      width: 100%;
      height: 40px;
      padding: 7px 15px;
      font-size: ${fontSize.md}px;
      font-weight: ${fontWeight.md};
      line-height: 1.5;
      color: ${colors.inputColor};
      background-color: ${colors.white};
      background-clip: padding-box;
      border: 1px solid ${colors.whisper};
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      outline: 0;
      margin-top: 3px;
      &:disabled {
        background: ${colors.smoke};
      }
      &.error {
        border: 1px solid ${colors.secondary};
      }
      
      &:focus {
        border-color: ${colors.inputBorder}
      }

      &::placeholder {
        opacity: .3;
        font-weight: 400;
      }
    }
  }
  &.custom-check {
    display: flex;
    align-items: center;
    input {
      opacity: 0;
      position: absolute;

      &[type='checkbox'] {
        &:checked {
          +label {
            &:before {
              background-color: ${colors.white};
            }
            &:after {
              opacity: 1;
            }
          }
        }

        &:not(:checked) {
          +label {
            &:before {
              background-color: ${colors.white};
            }
            &:after {
              opacity: 0;
            }
          }
        }
      }
    }

    label {
      position: relative;
      padding-left: 20px;
      margin-bottom: 0;
      width: auto;
      text-align: left;
      cursor: pointer;
      text-transform: lowercase;
      user-select: none;

      &:before {
        content: '';
        position: absolute;
        top: 5px;
        margin: auto;
        left: 0;
        border: 1px solid ${colors.light};
        border-radius: 0;
        width: 15px;
        height: 15px;
      }

      &:after {
        content: '';
        position: absolute;
        top: 7px;
        margin: auto;
        left: 5px;
        width: 5px;
        height: 9px;
        border: 1px solid ${colors.secondary};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }
  &.custom-radio {
    display: flex;
    align-items: center;
    input {
      opacity: 0;
      position: absolute;

      &[type='radio'] {
        &:checked {
          +label {
            &:before {
              opacity: 1;
            }
          }
        }

        &:not(:checked) {
          +label {
            &:before {
              opacity: 0;
            }
          }
        }
      }
    }

    label {
      position: relative;
      padding-left: 20px;
      margin-bottom: 0;
      width: auto;
      text-align: left;
      cursor: pointer;
      text-transform: lowercase;
      user-select: none;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 15px;
        position: absolute;
        transition: all 0.3s ease;
      }

      &:before {
        width: 9px;
        height: 9px;
        background: ${colors.secondary};
        top: 8px;
        left: 3px;
      }

      &:after {
        width: 15px;
        height: 15px;
        border: 1px solid ${colors.secondary};
        left: 0;
        top: 5px;
      }
    }
  }
  svg.select-icon {
    position: absolute;
    right: 15px;
    top: 0;
    bottom: -22px;
    margin: auto 0;
  }

  .input-wrap {
    position: relative;
  }
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 7px 15px;
  font-size: ${fontSize.md}px;
  font-weight: ${fontWeight.md};
  line-height: 1.5;
  color: ${colors.inputColor};
  background-color: ${colors.white};
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .3rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  outline: 0;
  &:disabled {
    background: ${colors.smoke};
  }
  &.error {
    border: 1px solid ${colors.danger};
  }
  
  &:focus {
    border-color: ${colors.inputBorder}
  }

  &::placeholder {
    opacity: .3;
    font-weight: 400;
  }

  &.phone {
    padding-left: 45px;
  }

  ${({ phone }) => phone && css`
    padding-left: 45px;
  `}

  ${({ select }) => select && css`
    position: relative;
    appearance: none;
  `}

  ${({ textarea }) => textarea && css`
    min-height: ${props => props.rows}px;
  `}

  ${({ checkbox }) => checkbox && css`
    height: 25px;
  `}

  ${({ radio }) => radio && css`
    height: 25px;
  `}
  
  ${({ search }) => search && css`
    width: 100%;
  `}
`

const Label = styled.label`
  max-width: 100%;
  color: ${colors.label};
  font-size: ${fontSize.md}px;
  font-weight: ${fontWeight.md};
  white-space: break-spaces;
  overflow: hidden;
  margin-bottom: 5px;
`

const Span = styled.span`
  position: absolute;
  top: 18.5px;
  margin: auto 0;

  ${({ InputPhone }) => InputPhone && css`
    height: 100%;
    top: 0;
    font-size: ${fontSize.md}px;
    font-weight: ${fontWeight.md};
    color: ${colors.inputColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;
    &:before {
      content: '+95';
    }
  `}
`

const ErrorMessage = styled.span`
  position: absolute;
  color: ${colors.danger};
  font-size: ${fontSize.sm}px;
  display: inline-block;
  /* margin-left: 15px; */
  line-height: 20px;
`

const Error = styled.p`
  color: ${colors.danger};
  font-size: ${fontSize.sm}px;
  margin: 0;
`

export {
  InputGroup,
  Input,
  Label,
  Span,
  Error,
  ErrorMessage
}
