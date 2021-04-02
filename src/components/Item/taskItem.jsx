import React from 'react';
import {Deleteted} from '../buttonDel/buttonDelete';
import {Changed} from '../buttonChange/buttonChange';

const createStyle = {fontSize: '20px'};
export const TaskItem= ({item}) => {
    return (
            <li style={createStyle} id='list'>
                <div > Name Task: {item.nameTask}</div> 
                <div class="importance"> Importance: {item.importance}</div>   
                <Deleteted/>  
                <Changed/>            
            </li>
    );
}
