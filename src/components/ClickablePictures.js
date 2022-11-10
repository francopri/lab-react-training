import { useState } from 'react';

function ClickablePictures({ img, imgClicked }) {

    const [picture, setPicture] = useState(img);

    return (
        
            <img className='clickable-pictures' onClick={()=>{

                // let newPicture;
                // if (picture === imgClicked){
                //     newPicture = img;                    
                // }
                // else {
                //     newPicture = imgClicked;
                // }

                // const newPicture = picture === img ? imgClicked : img;

                // setPicture(newPicture);

                setPicture(picture === img ? imgClicked : img);

            }} src={picture} alt="foto" />

    )
}

export default ClickablePictures;