import React, { useState } from 'react';
import '../App.css'
import {changeValue} from "../store/store" 
const withHandler = (WrappedComponent) =>{
    
  return class NewComponent extends React.Component {


    

    render() {
      return (
        <WrappedComponent
        class = "container-fluid"
        ></WrappedComponent>
      );
    }
  };

}

const mstp = (state) => {
    return{...state}
}
// export default connect(mstp,{changeValue})(withHandler);
export default withHandler;