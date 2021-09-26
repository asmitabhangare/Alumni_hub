import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Cards from '../Posts/Cards';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

/**
* @author
* @function CreatePost
**/

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));



const CreatePost = (props) => {

    const classes = useStyles();

    return (
        <div>
            <div className="createPostContainer">
                <div className="containerTitle">Create Post</div>
                <div className="postHeading">Enter your Post Title</div>
                <input type="text" className="titleInput" placeholder="Post title"></input>
                <div className="description">Enter post description</div>
                <textarea rows="10" className="descriptionInput" placeholder="Post description"></textarea>
                <div className="image">Select Image to upload</div>

                <div className={classes.root}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <div className="upload">
                    <label htmlFor="contained-button-file">
                        
                        <Button variant="contained" color="primary" component="span">Upload</Button>
                        
                    </label>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                        
                    </label>
                    </div>
                </div>
                <NavLink to="/"><div className="buttonClass"><Button variant="contained" color="primary" disableElevation>Post</Button></div></NavLink>

            </div>




        </div>
    )

}

export default CreatePost