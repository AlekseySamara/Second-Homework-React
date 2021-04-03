import React from 'react';
import Bar from './Bar/Bar';

export const ControlsBar= () => {
    return (
        <div>
                <div>
                    <textarea class='placeholder' placeholder='Add new task'/>
                </div>
                <Bar  DefaultTask={'All task'}/>
                <Bar  DefaultTask={'Active task'}/>
                <Bar  DefaultTask={'Completed task'}/>
        </div>                
    );
}

