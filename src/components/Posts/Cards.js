import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
function Cards(props) {
    return (
        <>

          
                <div className="card">

                    <img className="photo" src={props.photo} />
                    <span className="title">{props.cardname} </span>
                    <p className="intro">{props.intro}</p>
                    <p className="des">
                        {props.msg}
                    </p>
                    <span className="tags">
              {props.tag}
              </span>
                    <img src={props.imgname}
                        alt="myPic"
                        className="card_img" />
                    <div className="btn-like">
                        <button class=" btn-5 "><span>Read More</span></button>
                        <span className="like">
                            <FormControlLabel
                                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                label="Like"
                            />
                        </span></div>
                </div>
          
        </>
    )
}


export default Cards