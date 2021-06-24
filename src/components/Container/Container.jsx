import React from 'react'

import styled from 'styled-components'

import { BoxList } from '../Box/Box'

import { ToDoModal } from '../ToDoModal/ToDoModal';

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

    const [ isModalVisible, setIsModalVisible] = React.useState(false)

    const modalHandle = () =>{
        setIsModalVisible(true)
    }

    const handleOk = () =>{
        setIsModalVisible(false)
    }

    const handleCancel = () =>{
        setIsModalVisible(false)
    }

    return(
      <StyledContainer>

          <StyleParagraph>To Do List</StyleParagraph>
          <BoxList modalHandle = {modalHandle}/>
          <ToDoModal isModalVisible = {isModalVisible} onOk={handleOk} onCancel={handleCancel}/>
          

      </StyledContainer>
    )
}