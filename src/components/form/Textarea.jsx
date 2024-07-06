import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: left;
  background: transparent;
  border: none;
  :focus {
    outline: none;
  }
`
export default function Textarea({ placeholder, ...props }) {
  return <StyledTextarea {...props} placeholder={placeholder} />
}
