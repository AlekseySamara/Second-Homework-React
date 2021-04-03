import React from 'react';
import ControlButton from '../ControlButtons/ControlButton';

const createStyle = {fontSize: '20px'};
export const TaskItem= ({item}) => {
    return (
            <li style={createStyle} id='list'>
                <div > Name Task: {item.nameTask}</div> 
                <div class="importance"> Importance: {item.importance}</div>   
                <ControlButton DefaulButton= {'Task Delete'}/>  
                <ControlButton DefaulButton= {'Change importance task'} />        
            </li>
    );
}
