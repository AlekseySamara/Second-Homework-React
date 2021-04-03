import React from 'react';

class ControlButton extends React.Component {
   render(){
        const {DefaulButton} = this.props;
        return (  
         <button class='button'>{DefaulButton}</button>                                           
       )
   }
}
export default ControlButton;