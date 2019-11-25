import React, { Component } from 'react';
import  ListItemComponent  from '../list-item/ListItem';
import {
    FlatList, Text, View, StyleSheet

} from 'react-native';

const styles = StyleSheet.create({
    listTitle: {
        fontSize: 18,
        color: '#3c4858',
        marginLeft: 20
    }
});

export class SideSwipeListComponent extends Component {
    constructor(props){
        super();
        console.log('ss list props: ', props);
        this.state = {
            list: props.input.list,
            navigationScreen: props.input.navigationScreen,
            title: props.input.listTitle
        }
    }
    render() {
        return(
            <View>
                <Text style={styles.listTitle}>{this.state.title}</Text>
                <FlatList
                    horizontal={true}
                    data={this.state.list}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) =>
                        <ListItemComponent navigationScreen={this.state.navigationScreen}
                                           key={index}
                                           listLength={this.state.list.length}
                                           index={index}
                                           input={item}/>}/>
            </View>
        )
}
}
