import React from 'react'

import styled from 'styled-components'

import { Button } from 'antd'

import { DeleteOutlined } from '@ant-design/icons'

const StyleButton = styled(Button)`
    display: flex;
    float: right;
    margin-left: 55rem;
    margin-top: -3rem;
    border: none;
    font-size: 1.5rem;
`

export const DeleteButton = () =>{
    return(
        <div>
            <StyleButton><DeleteOutlined /></StyleButton>
        </div>
    )
}