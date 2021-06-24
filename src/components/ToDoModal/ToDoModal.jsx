import React from 'react'

import { Modal, Input , Select } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(Input)`
    margin-bottom: 1rem;
`
const StyledSelect = styled(Select)`
    margin-top: 1rem;
`

export const ToDoModal = ({ isModalVisible, onOk, onCancel}) =>{
    return(
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={onOk} onCancel={onCancel}>
                <StyledInput placeholder='List Name'></StyledInput> <br></br>
                <Input type='datetime-local'></Input><br></br>
                <StyledSelect defaultValue='Priority' style={{width: 120} }>
                    <option value='Priority'>Priority</option>
                    <option value='Main'>Main</option>
                    <option value='Low'>Low</option>
                </StyledSelect> 
               
            </Modal>
        </div>
    )
}