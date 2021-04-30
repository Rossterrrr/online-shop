import React from 'react';
import './modal.css';

export default class Modal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="modal">
                <button className="close-modal">X</button>
                <div className="gallery">
                    <i className="material-icons prev-btn">expand_less</i>
                    <div className="vertical-carousel">
                    <img src="./1/4b6db3/demo.jpg"/>
                        <img src="./1/4b6db3/1.jpg"/>
                        <img src="./1/4b6db3/2.jpg"/>
                        <img src="./1/4b6db3/3.jpg"/>
                        <img src="./1/4b6db3/4.jpg"/>
                        <img src="./1/4b6db3/5.jpg"/>
                        <img src="./1/4b6db3/6.jpg"/>
                    </div>
                    <div className="gallery-image">
                        <img src="./1/4b6db3/demo.jpg"/>
                    </div>
                    <i className="material-icons next-btn">keyboard_arrow_down</i>
                </div>  
                <div className="modal-info-block">
                    <h3>Вискозное платье миди</h3>
                    <h4>1699</h4>
                    <div className="sizes">
                        <div className="size xs">XS</div>
                        <div className="size s">S</div>
                        <div className="size m">M</div>
                        <div className="size l">L</div>
                    </div>
                    <button className="add-to-cart">Добавить в корзину</button>
                </div>   
            </div>
        )
    }
}