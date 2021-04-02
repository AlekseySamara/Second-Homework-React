import React from 'react';
import {TaskItem} from '../Item/taskItem';

export const Comment = ({tasks}) => {
    return (
        <ul>{
            tasks.map((item) => <TaskItem key={item.id} item={item}/>)}
        </ul>
        );
};


