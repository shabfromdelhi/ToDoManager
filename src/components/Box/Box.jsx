import React from 'react'

import styled from 'styled-components'

import { AddButton } from '../Add_button/Add_button'

const StyleBox = styled.div`
    height: 30rem;
    width: 66rem;
    border: 1px solid #fff;
    background-color: #fff;
    margin: 0 auto;
    margin-left: -28rem;
    margin-top: 4rem;
` 

const StylePara = styled.p`
   margin: 0 auto;
   margin-top: 12rem;
   font-family: lato;
   font-size: 16px;
   height: 3rem;
    width: 20rem;
    border: 1px solid #D0ECF3;
    padding-top: 13px;
    background-color: #D0ECF3;
    border-radius: 6px;
`

export const BoxList = () =>{
    return(
        <StyleBox>

            <StylePara>Click on add button to start your to do lists.</StylePara>
            <AddButton/>

        </StyleBox>
    )
}