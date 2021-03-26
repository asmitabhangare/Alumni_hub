import React from 'react'
import Cards from './Cards';
import './post.css';
import Sdata from './Sdata';


function Mainpost() {
    return (
        <>
          
          <div className="main">
          <Cards imgname = {Sdata[0].imgname}
          cardname ={Sdata[0].sname}
          photo = {Sdata[0].photo}
          msg = {Sdata[0].msg}
          intro = {Sdata[0].intro}
          
          />
          <Cards imgname = {Sdata[1].imgname}
          cardname ={Sdata[1].sname}
          photo = {Sdata[1].photo}
          msg = {Sdata[1].msg}
          intro = {Sdata[1].intro}
          />

          
          </div>   
        </>
    )
}

export default Mainpost;
