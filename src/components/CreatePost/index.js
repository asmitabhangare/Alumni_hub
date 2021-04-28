import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Cards from '../Posts/Cards';

/**
* @author
* @function CreatePost
**/

const CreatePost = (props) => {
    return (
        <div>
            <div className="createPostContainer">
                <div className="containerTitle">Create Post</div>
                <div className="postHeading">Enter your Post Title</div>
                <input type="text" className="titleInput" placeholder="Enter your post title"></input>
                <div className="description">Enter post description</div>
                <input type="text" className="descriptionInput" placeholder="Enter your description"></input>
                <div className="image">Select Image to upload</div>
                <input type="file" className="imageInput" placeholder="Select Image"></input>
                <NavLink to="/"><div className="buttonClass"><button className="postButton">Post</button></div></NavLink>

            </div>
        </div>
    )

}

export default CreatePost