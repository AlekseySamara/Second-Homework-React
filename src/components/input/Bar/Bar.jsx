import React from 'react';

class Bar extends React.Component {
   render(){
        const {DefaultTask} = this.props;
        return (  
            <button class='button'>{DefaultTask}</button>                                 
       )
   }
}
export default Bar;