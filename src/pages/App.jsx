import React from 'react'
import styled from 'styled-components'

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
  padding: 15px 0px;
  overflow-x: auto;
`
const NoteList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 25px 0px;
`
const FavoriteList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 25px 0px;
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
export default function App() {
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
          <Note />
          <Note />
          <Note />
          <Note />
        </NoteList>
      </Container>
    </>
  )
}
