import React from 'react';
import './app.css';
import NavBar from '../nav-bar/nav-bar';
//import Demo from '../demo/demo';
import ItemList from '../item-list/item-list';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    src:'./1/demo.jpg',
                    name:'вискозное платье миди',
                    coast:'1799',
                    favorite:false,
                    id:1
                },{
                    src:'./2/demo.jpg',
                    name:'платье женское',
                    coast:'3299',
                    favorite:false,
                    id:2
                }
            ]
        }
        this.onFavorite = this.onFavorite.bind(this);
        this.onMouseOnItem = this.onMouseOnItem.bind(this);
        this.onMouseNotOnItem = this.onMouseNotOnItem.bind(this);
    }
    onFavorite(id){
        let tmpData = JSON.parse(JSON.stringify(this.state.data)); 
        tmpData.map(item => {
            if(item.id === id){
               item.favorite = item.favorite?false:true;
            }
            return item;
        })
        this.setState({data:tmpData});
    }
    onMouseOnItem(id){
        let tmpData = JSON.parse(JSON.stringify(this.state.data));
        tmpData.map(item => {
            if(item.id === id){
                item.src = `./${id}/1.jpg`;
            }
            return item;
        })
        console.log('onitem');
        this.setState({data:tmpData});

    }
    onMouseNotOnItem(id){
        console.log('notonitem');
        let tmpData = JSON.parse(JSON.stringify(this.state.data));
        tmpData.map(item => {
            if(item.id === id){
                item.src = `./${id}/demo.jpg`;
            }
            return item;
        })
        this.setState({data:tmpData});

    }
    render(){
        return(
            <div className="app-container">
                <NavBar></NavBar>
                <ItemList data={this.state.data} onFavorite={this.onFavorite} onMouseOnItem={this.onMouseOnItem} onMouseNotOnItem={this.onMouseNotOnItem}></ItemList>
            </div>
            
        )
    }
}