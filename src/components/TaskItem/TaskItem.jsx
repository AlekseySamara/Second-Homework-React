import React from 'react';
import Bar from '../ControlsBar/Bar/Bar';

const createStyle = {fontSize: '20px'};
export const TaskItem= ({item}) => {
    return (
            <li style={createStyle} id='list'>
                <div > Name Task: {item.nameTask}</div> 
                <div class="importance"> Importance: {item.importance}</div>   
                <Bar  DefaultTask= {'Task Delete'}/>  
                <Bar  DefaultTask= {'Change importance task'} />        
            </li>
    );
}
