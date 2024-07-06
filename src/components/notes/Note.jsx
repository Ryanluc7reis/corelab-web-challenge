import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

import { Input } from '../form/Input'
import Textarea from '../form/Textarea'

const NoteContainer = styled.div`
  width: 80%;
  height: 337.59px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    width: 340px;
    height: 430px;
  }
`
const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`
const StyledFlexEditing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 15px;
`
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
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
const Image = styled.img`
  padding: 7px;
  cursor: pointer;
`
const ImageAlt = styled(Image)`
  padding: 7px;
  border-radius: 15px;
  background: rgba(255, 227, 179, 1);
`
const Barra = styled.div`
  width: 100%;
  border: 1px solid rgba(217, 217, 217, 1);
`
const TextareaAlt = styled(Textarea)`
  width: 95%;
`
export default function Note() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isEditNote, setIsEditNote] = useState(false)
  const [isEditPaint, setIsEditPaint] = useState(false)

  return (
    <NoteContainer>
      <StyledFlex>
        <InputAlt placeholder="Título" />
        {isFavorite ? (
          <Image onClick={() => setIsFavorite(!isFavorite)} src="estrelaYellow.png" />
        ) : (
          <Image onClick={() => setIsFavorite(!isFavorite)} src="estrela.png" />
        )}
      </StyledFlex>
      <Barra />
      <TextareaContainer>
        <TextareaAlt placeholder="Clique ou arraste o arquivo para esta área para fazer upload" />
        <StyledFlexEditing>
          <StyledFlex>
            {isEditNote ? (
              <ImageAlt onClick={() => setIsEditNote(!isEditNote)} src="edit.png" />
            ) : (
              <Image onClick={() => setIsEditNote(!isEditNote)} src="edit.png" />
            )}
            {isEditPaint ? (
              <ImageAlt onClick={() => setIsEditPaint(!isEditPaint)} src="poteTinta.png" />
            ) : (
              <Image onClick={() => setIsEditPaint(!isEditPaint)} src="poteTinta.png" />
            )}
          </StyledFlex>
          <Image src="x.png" />
        </StyledFlexEditing>
      </TextareaContainer>
    </NoteContainer>
  )
}
