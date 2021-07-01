import React  from 'react'

import { DeleteButton } from '../DeleteButton/DeleteButton'

import styled from 'styled-components'

const StyleList = styled.div`
    display: block;
    float: left;
    list-style: none;
    margin-left: 65px;
    text-align: initial;

`

const StyledPara = styled.p`
    margin-left: -2rem;
    margin-top: 2rem;
`

export const ListItem = ({item, index}) =>{
    return(
        <StyleList>

            <StyledPara>{index + 1}</StyledPara>

        
            <li>{item.toDoName}</li>
            <li>{item.toDoDate}</li>
            <li>{item.toDoPriority}</li>  

            <DeleteButton/>  

        </StyleList>     

        
            
        
        
    )
}