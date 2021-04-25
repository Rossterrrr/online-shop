import React from 'react';
import './nav-bar.css';

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className="nav-bar">
                <img src="./zara.png" className="nav-img"></img>
                <ul className="nav-items">
                    <li className="nav-item">Главная</li>
                    <li className="nav-item">Товары</li>
                    <li className="nav-item">О нас</li>
                    <li className="nav-item">Доставка</li>
                </ul>
                <div className="cart-btn">
                    <i className="material-icons cart-icon">shopping_cart</i>
                    Корзина
                </div>
            </nav>
        )
    }
}