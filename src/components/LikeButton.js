import React from "react";
import { useState } from 'react';



function LikeButton() {

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const [indexColor, setColor] = useState(0);

    const [contador, setContador] = useState(0);

    return (
        <span className="like-btn">
            <button onClick={() => {

                setContador(contador + 1);

                let newIndexColor = indexColor + 1;

                if (newIndexColor >= colors.length) {
                    newIndexColor = 0;
                }

                setColor(newIndexColor);

            }
            }
            style={{
                backgroundColor: colors[indexColor]
            }}
            >{`${contador} Likes`}</button>
        </span>
    )
}



export default LikeButton;