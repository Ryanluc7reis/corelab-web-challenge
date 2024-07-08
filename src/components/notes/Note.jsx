import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import { Input } from '../form/Input'
import { Button } from '../form/Button'
import Textarea from '../form/Textarea'
import EditPaint from './EditPaint'

const NoteContainer = styled.div`
  position: relative;
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
const Text = styled.h3`
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: left;
  width: 100%;
  padding: 15px;
  color: rgba(79, 79, 77, 1);
`
const TextConfirmDelete = styled(Text)`
  text-align: center;
  font-weight: 600;
  width: 90%;
  font-size: 16px;
  color: rgba(79, 79, 77, 1);
`
const Title = styled(Text)`
  font-size: 14.2px;
  font-weight: 700;
  text-align: left;
  ::placeholder {
    color: rgba(51, 51, 51, 1);
  }
`
const StyledFlexEditing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 15px;
`

const InputTitle = styled(Input)`
  font-size: 14.2px;
  font-weight: 700;
  text-align: left;
  ::placeholder {
    color: rgba(51, 51, 51, 1);
  }
  border: ${(props) => (props.isEditing ? '1px solid black' : 'none')};
`
const Image = styled.img`
  padding: 7px;
  cursor: pointer;
  :hover {
    background: #cacaca;
    border-radius: 15px;
  }
`
const ImagePaint = styled(Image)`
  padding: 7px;
  border-radius: 15px;
  background: rgba(255, 227, 179, 1);
`

const Barra = styled.div`
  width: 100%;
  border: 1px solid rgba(217, 217, 217, 1);
`
const TextareaEditing = styled(Textarea)`
  width: 100%;
  color: rgba(79, 79, 77, 1);
  border: ${(props) => (props.isEditing ? '1px solid black' : 'none')};
`
const ConfirmDeleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #0000006e;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`
const ConfirmDelete = styled.div`
  width: 80%;
  height: 110px;
  border-radius: 15px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    width: 440px;
  }
`
const ButtonDeleter = styled(Button)`
  background: red;
  :hover {
    background: #790000;
  }
`
export default function Note({ title, text, favorite, createdDate, color, id, ...props }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isEditNote, setIsEditNote] = useState(false)
  const [isEditPaint, setIsEditPaint] = useState(false)
  const [currentColor, setCurrentColor] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const URI_API = process.env.API_URI
  const { mutate } = useSWRConfig()

  const EditingNote = () => {
    setIsEditNote(!isEditNote)
  }
  const EditingPaint = () => {
    setIsEditPaint(!isEditPaint)
  }
  const EditingFavorite = () => {
    setIsFavorite(!isFavorite)
  }
  const CloseBoxPaint = () => {
    if (currentColor !== null) {
      setIsEditPaint(false)
    }
  }
  const HandleConfirmDelete = () => {
    setConfirmDelete(!confirmDelete)
  }
  const { control } = useForm({
    mode: 'all'
  })
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${URI_API}/deleteNote`, {
        data: {
          id
        }
      })

      if (response.status === 200) {
        mutate(`${URI_API}/getNotes`)
        mutate(`${URI_API}/getFavoritesNotes`)
        setConfirmDelete(false)
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <NoteContainer {...props} style={{ background: { color } }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        {isEditNote ? (
          <InputTitle
            name="title"
            control="control"
            isEditing={isEditNote ? true : false}
            placeholder={title}
          />
        ) : (
          <Title>{title || 'Título'}</Title>
        )}
        {favorite ? (
          <Image onClick={EditingFavorite} src="estrelaYellow.png" />
        ) : (
          <Image onClick={EditingFavorite} src="estrela.png" />
        )}
      </div>
      <Barra />
      <TextareaContainer>
        {isEditNote ? (
          <TextareaEditing isEditing={isEditNote ? true : false} placeholder={text} />
        ) : (
          <Text>{text || 'Clique ou arraste o arquivo para esta área para fazer upload'}</Text>
        )}
        <StyledFlexEditing>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            {isEditNote ? (
              <ImagePaint onClick={EditingNote} src="edit.png" />
            ) : (
              <Image onClick={EditingNote} src="edit.png" />
            )}
            {isEditPaint ? (
              <ImageAlt onClick={EditingPaint} src="poteTinta.png" />
            ) : (
              <Image onClick={EditingPaint} src="poteTinta.png" />
            )}
          </div>
          <Image onClick={HandleConfirmDelete} src="x.png" />
          {confirmDelete && (
            <ConfirmDeleteContainer>
              <ConfirmDelete>
                <TextConfirmDelete style={{ color: 'black' }}>
                  Tem certeza que deseja excluir essa tarefa ?{' '}
                </TextConfirmDelete>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Button onClick={HandleConfirmDelete}>Cancelar</Button>
                  <ButtonDeleter onClick={handleDelete}>Excluir </ButtonDeleter>
                </div>
              </ConfirmDelete>
            </ConfirmDeleteContainer>
          )}
        </StyledFlexEditing>
      </TextareaContainer>
      {isEditPaint && <EditPaint setCurrentColor={setCurrentColor} closeBoxPaint={CloseBoxPaint} />}
    </NoteContainer>
  )
}
