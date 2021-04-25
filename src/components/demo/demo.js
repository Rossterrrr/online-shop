import React from 'react';
import './demo.css';
 
function Demo(){
    return(
    <div className="gallery">
        <div className="gallery-images">
            <img src="./demo1.jpg"/>
            <img src="./demo2.jpg"/>
            <img src="./demo3.jpg"/>
        </div>
        <button className="prev-image">prev</button>
        <button className="next-image">next</button>
    </div>
    )
}
export default Demo;