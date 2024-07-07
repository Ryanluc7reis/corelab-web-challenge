import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useSWR from 'swr'

import CreateNote from '../components/notes/CreateNote'
import NavBar from '../components/navbar/Navbar'
import Note from '../components/notes/Note'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(240, 242, 245, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0px;
  overflow-x: auto;
  gap: 60px;
`
const NoteList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 25px;
`
const FavoriteList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`
const TitleList = styled.h2`
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: left;
  padding: 6px 0;
  color: rgba(70, 70, 70, 1);
  position: absolute;
  left: 10%;
  transform: translateY(-110%);

  @media (min-width: 2000px) {
    left: 15%;
  }
  @media (min-width: 2560px) {
    left: 23%;
  }
`
const fetcher = async (url) => {
  const response = await axios.get(url)
  return response.data
}

export default function App() {
  const { data, error } = useSWR(`http://localhost:4444/getFavoritesNotes`, fetcher)

  if (error) return <h1>Erro ao carregar dados.</h1>
  if (!data) return <h1>Carregando...</h1>
  return (
    <>
      <NavBar />
      <Container>
        <CreateNote />
        <FavoriteList>
          <TitleList>Favoritos</TitleList>
          <Note />
          <Note />
          <Note />
        </FavoriteList>
        <NoteList>
          <TitleList>Outros</TitleList>
          {data.map((note) => (
            <Note
              key={note._id}
              title={note.title}
              createdDate={note.createdDate}
              text={note.text}
              favorite={note.favorite}
              color={note.color}
              id={note._id}
            />
          ))}
        </NoteList>
      </Container>
    </>
  )
}
