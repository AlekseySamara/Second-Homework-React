import React from 'react';
import {AllTask} from './buttonFromInput/Alltask';
import {ActiveTask} from './buttonFromInput/Activetask';
import {CompletedTask} from './buttonFromInput/Completed'

export const InputPlaceholder= () => {
    return (
        <div>
            <input class='placeholder' type="text" placeholder="Add new task"/>
            <div>
                <AllTask/>
                <ActiveTask/>
                <CompletedTask/>
            </div>
        </div>
            

                   
 
    );
}
