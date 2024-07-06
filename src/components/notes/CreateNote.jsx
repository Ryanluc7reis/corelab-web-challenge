import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

import { Input } from '../form/Input'
import Textarea from '../form/Textarea'

const NoteContainer = styled.div`
  width: 80%;
  height: 130.36px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(217, 217, 217, 1);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    width: 530.17px;
    height: 120.36px;
    border-radius: 7px;
    border: 1px;
  }
`
const StyledFlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`
const InputAlt = styled(Input)`
  font-size: 14.2px;
  font-weight: 700;
  text-align: left;
  ::placeholder {
    color: rgba(51, 51, 51, 1);
  }
`
const Star = styled.img`
  padding: 1px;
  cursor: pointer;
`

const Barra = styled.div`
  width: 100%;
  border: 1px solid rgba(217, 217, 217, 1);
`
export default function CreateNote() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <NoteContainer>
      <form>
        <StyledFlexTitle>
          <InputAlt placeholder="Título" />
          {isFavorite ? (
            <Star onClick={() => setIsFavorite(!isFavorite)} src="estrelaYellow.png" />
          ) : (
            <Star onClick={() => setIsFavorite(!isFavorite)} src="estrela.png" />
          )}
        </StyledFlexTitle>
        <Barra />
        <Textarea placeholder="Criar nota.." />
      </form>
    </NoteContainer>
  )
}
