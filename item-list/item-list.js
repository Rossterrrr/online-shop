import React from 'react';
import Item from '../item/item';
import './item-list.css';

export default class ItemList extends React.Component{
    constructor(props){
        super(props);
    }
    setItems(){
        const elements = this.props.data.map(item => {
            return <Item 
                data={item} 
                onFavorite={() => this.props.onFavorite(item.id)} 
                onMouseOnItem={() => this.props.onMouseOnItem(item.id)} 
                onMouseNotOnItem={() => this.props.onMouseNotOnItem(item.id)}
            ></Item>;
        })
        return elements;
    }
    render(){
        return(
            <div className="items">
                {this.setItems()}
            </div>
            
        )
    }
}