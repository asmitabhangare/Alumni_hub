import React from 'react'
import Posts from '../../components/Posts'
import Sidebar from '../../components/Sidebar'
import './style.css'
import Mainpost from '../../components/Posts/mainpost';

/**
* @author
* @function Body
**/

const Body = (props) => {
    return (
        <div className="bodyContainer" >
            <div className="sidebarContainer"><Sidebar></Sidebar></div>
            <div className="blogPostContainer"><Mainpost></Mainpost></div>
            <div className="sidebarContainer"><Sidebar></Sidebar></div>
        </div>
    )

}

export default Body