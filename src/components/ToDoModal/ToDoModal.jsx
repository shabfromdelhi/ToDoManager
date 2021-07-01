import React from 'react'

import { Modal, Input , Select } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(Input)`
    margin-bottom: 1rem;
`
const StyledSelect = styled(Select)`
    margin-top: 1rem;
`

export const ToDoModal = ({ isModalVisible, onOk, onCancel, handleToDoAdd}) =>{

    let currentDate = new Date().toISOString();
    currentDate = currentDate.split('.')[0]

    const [ toDoName, setToDoName ] = React.useState('')
    const [ toDoDate, setToDoDate ] = React.useState(currentDate)
    const [ toDoPriority, setToDoPriority ] = React.useState('Low')

    const addToDoHandler = () =>{
        const obj = {
            toDoName,
            toDoDate,
            toDoPriority
        }

        handleToDoAdd(obj)
        setToDoName('')
        setToDoDate('')
        setToDoPriority('')
        onOk()
    }

    return(
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={addToDoHandler} onCancel={onCancel}>
                <StyledInput placeholder='List Name' onChange={(e) => setToDoName(e.target.value)}/><br></br>
                <Input type='datetime-local' onChange={(e) => setToDoDate(e.target.value)}/><br></br>
                <StyledSelect defaultValue='Low' style={{width: 120} } onChange={(value) => setToDoPriority(value)}>
                    <option value='High'>High</option>
                    <option value='Medium'>Medium</option>
                    <option value='Low'>Low</option>
                </StyledSelect> 
               
            </Modal>
        </div>
    )
}