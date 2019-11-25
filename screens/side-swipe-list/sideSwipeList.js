import React, { Component } from 'react';
import  ListItemComponent  from '../list-item/ListItem';
import {
    FlatList,
} from 'react-native';

export class SideSwipeListComponent extends Component {
    constructor(props){
        super();
        console.log('ss list props: ', props);
        this.state = {
            list: props.list
        }
    }
    render() {
        return(
            <FlatList horizontal={true} data={this.state.list}  keyExtractor={item => item.id} renderItem={({item, index}) => <ListItemComponent key={index} listLength={this.state.list.length} index={index} input={item}/>}/>
        )
}
}