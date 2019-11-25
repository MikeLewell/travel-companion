import {store} from '../../store';
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    locationBox: {
        height: 200,
        width: 150,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden'
    }, 
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    locationTitleText: {
        color: 'white',
        fontSize: 20
    },
    locationDescriptionText: {
        fontSize: 16,
        color: 'white'
    },
    extendedLeftMargin: {
        marginLeft: 20
    },
    extendedRightMargin: {
        marginRight: 20
    },
    padding10: {
        padding: 10,
    }
});

class ListItemComponent extends Component {
    constructor(props) {
        super();
        console.log('location list props: ', props)
        this.state = {
            locationName: props.input.name,
            locationDescription: props.input.description,
            index: props.index,
            listLength: props.listLength,
            navigationScreen: props.navigationScreen
        }
    }

    render() {
        return(
            <TouchableHighlight onPress={() => this.props.navigation.navigate(this.state.navigationScreen, {id: this.state.id})} style={[styles.locationBox, this.state.index === 0 ? styles.extendedLeftMargin: '', this.state.index === this.state.listLength - 1 ? styles.extendedRightMargin: '']}>
                <LinearGradient style={styles.padding10}  colors={['#a7a6cb', '#8989ba']}>
                <View style={styles.flexColumn}>
                        <Text style={styles.locationTitleText}>{this.state.locationName}</Text>
                        <Text style={styles.locationDescriptionText}>{this.state.locationDescription}</Text>
                </View>
                </LinearGradient>
            </TouchableHighlight>
        )
    }
}

export default withNavigation(ListItemComponent);
