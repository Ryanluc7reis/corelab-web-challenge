import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import { Input } from '../form/Input'
import { Button } from '../form/Button'
import Textarea from '../form/Textarea'

const NoteContainer = styled.div`
  width: 80%;
  height: 170.36px;
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 50%;
  align-items: end;

  @media (min-width: 600px) {
    align-items: start;
    height: auto;
  }
`
const ButtonAlt = styled(Button)`
  margin: 0px 15px;
  @media (min-width: 600px) {
    margin: 0px 3px;
  }
`

export default function CreateNote() {
  const { control, handleSubmit, reset } = useForm({
    mode: 'all'
  })
  const [isFavorite, setIsFavorite] = useState(false)
  const { mutate } = useSWRConfig()
  const URI_API = process.env.API_URI

  const onSubmit = async (data) => {
    try {
      let response
      if (isFavorite) {
        response = await axios.post(`${URI_API}/createFavoriteNote`, data)
      } else {
        response = await axios.post(`${URI_API}/createNote`, data)
      }

      if (response.status === 201) {
        reset()
        mutate(`${URI_API}/getNotes`)
        mutate(`${URI_API}/getFavoritesNotes`)
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <NoteContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFlexTitle>
          <InputAlt name="title" control={control} placeholder="Título" />
          {isFavorite ? (
            <Star onClick={() => setIsFavorite(!isFavorite)} src="estrelaYellow.png" />
          ) : (
            <Star onClick={() => setIsFavorite(!isFavorite)} src="estrela.png" />
          )}
        </StyledFlexTitle>
        <Barra />
        <Textarea name="text" control={control} placeholder="Criar nota.." />
        <ButtonContainer>
          <ButtonAlt type="submit">Criar nota</ButtonAlt>
        </ButtonContainer>
      </form>
    </NoteContainer>
  )
}
