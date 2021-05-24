import React from 'react'
import { useField } from 'formik'
import { InputGroup, Input, Label, ErrorMessage } from '../core/Form'
import { colors } from './../constant/Color'

const TextArea = ({ label, rows_height, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <InputGroup>
      <Label htmlFor={props.id || props.name}>
        {label}
        {props?.require === true && <span style={{ color: colors.danger }}> *</span>}
      </Label>
      <Input as="textarea" id={props.id || props.name} className={meta.touched && meta.error ? 'error' : ''} {...field} {...props} rows={rows_height} textarea />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </InputGroup>
  )
}

export default TextArea
