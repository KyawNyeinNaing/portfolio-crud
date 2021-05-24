import React from 'react'
import { useField } from 'formik'

import { InputGroup, Input, Label, ErrorMessage } from '../core/Form'
import { colors } from './../constant/Color'

const CheckBox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <InputGroup className="custom-check" {...props} style={{ marginBottom: 0 }}>
        <Input id='mm' type="checkbox" {...field} {...props} />
        <Label htmlFor='mm' className="custom-check" >
          <span>
            {label}
            {props?.require === true && <span style={{ color: colors.danger }}> *</span>}
          </span>
        </Label>
      </InputGroup>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  )
}

export default CheckBox