import React from 'react'

const FormRow = ({name, value, handleChange, labelText, type}) => {
  return (
    <>
      <label htmlFor={name} className='form-label'>{labelText}</label>
      <input type={type}
      className='form-control'
      name={name}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      />
    </>
  )
}

export default FormRow
