import React from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd';

function Item(props) {

    const {item} = props
    const StyledContainer = styled.div`
    margin: 20px;
    height: 25px;
    background-color: ${props => (props.isDragging ? '#ADD8E6' : 'white')};
    cursor: ${props => (props.isDragging ? 'grab;' : 'pointer;')}  
    border: ${props => (props.isDragging ? '1px solid rgba(0, 0, 0, 0.6);' 
                        : '1px solid rgba(0, 0, 0, 0.3);')}
    box-shadow: ${props => (props.isDragging ? '0px 10px 20px rgba(0, 0, 0, 0.19);' 
                            : '0px 2px 3px rgba(0, 0, 0, 0.13);')} 
    border-radius: 1px;
`;

    return (
        <Draggable draggableId={`${props.index}`} index={props.index}>
            {(provided, snapshot) => (
                <StyledContainer
                    ref = {provided.innerRef}
                    isDragging = {snapshot.isDragging}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                        {item}
                </StyledContainer>
            )}
        </Draggable>
    );
}
export default Item;