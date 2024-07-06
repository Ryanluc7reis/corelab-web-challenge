import React from 'react'
import styled from 'styled-components'

import Logo from '../logo/Logo'
import { Input } from '../form/Input'

const Container = styled.div`
  width: 100%;
  height: 57px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 7px 0px rgba(149, 149, 149, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
`
const Search = styled.div`
  padding: 0 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 28px;
  border-radius: 3px 0px 0px 0px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(217, 217, 217, 1);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 2560px) {
    width: 40%;
  }
`
const Image = styled.img`
  padding: 7px;
`
const InputAlt = styled(Input)`
  ::placeholder {
    padding: 15px;
  }
`
const StyledFlexSearchAndLogo = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
`
export default function Navbar() {
  return (
    <Container>
      <StyledFlexSearchAndLogo>
        <Logo />
        <Search>
          <InputAlt placeholder="Pesquisar Notas" />
          <Image src="lupa.png" />
        </Search>
      </StyledFlexSearchAndLogo>

      <Image src="x.png" />
    </Container>
  )
}
