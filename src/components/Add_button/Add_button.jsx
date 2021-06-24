import React from 'react'

import styled from 'styled-components'

import { Button } from 'antd';

import 'antd/dist/antd.css';

const StyleButton = styled(Button)`
    border-radius: 50%;
    margin-top:11rem;
    margin-left: 58rem;
    color: #fff;
    background-color: #2D3436;
    border: none;
    height: 3rem;
    width: 3rem;

    &:hover {
        background-color: #6A637E;
        color: #000;
    }
`
const StylePara = styled.p`
    font-size: 3rem;
    margin-top: -24px;
    margin-left: -7px;
}
`

export const AddButton = ({ modalHandle}) =>{
    return(
        <div>
            <StyleButton onClick={modalHandle}>
                <StylePara>+</StylePara>
            </StyleButton>
        </div>
    )
}