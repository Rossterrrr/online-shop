import React from 'react';
import './item.css';

export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.checkFavorite = this.checkFavorite.bind(this);
    }
    checkFavorite(item){
        console.log(item.favorite?'material-icons favorite-item like':'material-icons favorite-item');
        return item.favorite?'material-icons favorite-item like':'material-icons favorite-item';
    }
    render(){
        const imageUrl = `./${this.props.data.id}/1.jpg`;
        return(
            <div className="item">
                <div className="item-image-block">
                    <img src={this.props.data.src} className="item-image-background"/>
                    <img src={this.props.data.src} className="item-image first-image"/>
                    <img src={imageUrl} className="item-image second-image"/>
                    <i className={this.checkFavorite(this.props.data)} onClick={this.props.onFavorite}>favorite_border</i>
                </div>
                <div className="info-block">
                    <button className="fast-show">БЫСТРЫЙ ПОКАЗ</button>
                    <span className="item-name">{this.props.data.name.toUpperCase()}</span>
                    <span className="item-coast">{this.props.data.coast}Р</span>
                </div>
                <button className="add-to-cart">Добавить в корзину</button>
            </div>
        )
    }
}