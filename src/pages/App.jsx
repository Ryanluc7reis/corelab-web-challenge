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
`
const NoteList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 25px 0px;
`
const App = () => (
  <>
    <NavBar />
    <Container>
      <CreateNote />
      <NoteList>
        <Note />
        <Note />
        <Note />
      </NoteList>
    </Container>
  </>
)

export default App
