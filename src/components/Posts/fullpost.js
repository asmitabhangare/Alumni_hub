import React from 'react';
import Mainpost from './mainpost';
import Tags from './tags';
import './style.css';


const fullpost = () => {
    return (
        <div className ="main_1">
         <div className="back">
         <div className="comp">
         <div className="post">
         <Mainpost/> 
         </div>
         <div className="tag">
         <Tags/>
         </div>
         </div>
         
        </div>  
        </div>
    )
}

export default fullpost;
