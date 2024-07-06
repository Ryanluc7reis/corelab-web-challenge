import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  height: auto;
  border-radius: 3px 0px 0px 0px;
  border: none transparent;
  background: transparent;
  :focus {
    outline: none;
  }
`

export const Input = ({ placeholder, ...props }) => {
  return <StyledInput {...props} placeholder={placeholder} />
}
