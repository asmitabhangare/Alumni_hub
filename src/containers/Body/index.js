import React from 'react'
import Posts from '../../components/Posts'
import Sidebar from '../../components/Sidebar'
import './style.css'


/**
* @author
* @function Body
**/

const Body = (props) => {
    return (
        <div className="bodyContainer" >
            <Posts></Posts>
            <Sidebar></Sidebar>
        </div>
    )

}

export default Body