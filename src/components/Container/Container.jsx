import React from 'react'

import styled from 'styled-components'

import { BoxList } from '../Box/Box'

const StyledContainer = styled.div`
    height: 2rem;
    width: 8rem;
    background-color: #fff;
    border: 1px solid #fff;
    margin: 0 auto;
    margin-top: 4rem;  
`
const StyleParagraph = styled.p`
    font-size: 20px;
    font-family: lato;
    font-weight: bold;
    color: #2D3436;
`

export const Container = () =>{
    return(
      <StyledContainer>

          <StyleParagraph>To Do List</StyleParagraph>
          <BoxList/>

      </StyledContainer>
    )
}