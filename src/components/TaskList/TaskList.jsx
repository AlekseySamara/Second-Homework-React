import React from 'react';
import {TaskItem} from '../TaskItem/TaskItem';

export const TaskList = ({tasks}) => {
    return (
        <ul>{
            tasks.map((item) => <TaskItem key={item.id} item={item}/>)}
        </ul>
        );
};


