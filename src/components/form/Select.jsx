import React from 'react'
import { useField } from 'formik'
import { InputGroup, Input, Label, ErrorMessage } from '../core/Form'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { colors } from './../constant/Color'

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <InputGroup>
      <Label>
        {label}
        {props?.require === true && <span style={{ color: colors.danger }}> *</span>}
      </Label>
      <Input as="select" {...field} {...props} select />
      <MdKeyboardArrowDown />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </InputGroup>
  )
}

export default Select
