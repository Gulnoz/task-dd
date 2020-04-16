import React from 'react';
import Item from './Item'
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd';

function Task(props) {

const {toDo} = props
const StyledContainer = styled.div`
    background-color: #E0FFFF;
    padding: 15px;
    width: 25%;
`;
let taskHendler = (items)=>{
return items.map((item,index)=><Item index = {index} item = {item}></Item>)
}
    return (
        <Droppable droppableId = {toDo.id}>
            {provided => (
            <StyledContainer
                ref = {provided.innerRef}
                {...provided.droppableProps}>
                    <h2 style = {{margin:'20px'}}>{toDo['title']}</h2>
                    {taskHendler(toDo.list)}
                {provided.placeholder} 
            </StyledContainer>
            )}
        </Droppable>
    );
}
export default Task;