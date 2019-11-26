import {store} from '../../../store';
import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
    countryLi: {
        height: 150,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 6,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        position: 'relative',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',

    },
    image: {
        position: 'absolute',
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#404040',
        opacity: 0.4
    },
    h3: {
        fontSize: 30,
        fontWeight: 'normal',
        fontFamily: 'Roboto',
        color: 'white',
        margin: 5,
        marginLeft: 10,
        marginRight: 10
    },
});

class CountryListItemComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: this.props.country.name,
            id: this.props.country.id,
            img: this.props.country.img
        }
    }

    imageDecider(countryId) {
        const imagePaths = {
            thailand: require('../../../assets/images/thailand-country-list-image.jpg'),
            vietnam: require('../../../assets/images/vietnam-country-list-image.jpg'),
            cambodia: require('../../../assets/images/cambodia-country-list-image.jpg'),
            philippines: require('../../../assets/images/indonesia-country-list-image.jpg'),
        };
        switch(countryId) {
            case 'thailand':
                return imagePaths.thailand;
            case 'vietnam':
                return imagePaths.vietnam;
            case 'cambodia':
                return imagePaths.cambodia;
            case 'philippines':
                return imagePaths.philippines;
        }
    }

    render() {
        return(
            <TouchableHighlight onPress={() => this.props.navigation.navigate('CountryDetail', {id: this.state.id})} style={styles.countryLi}>
                <View style={styles.flexColumn}>
                    <Image source={this.imageDecider(this.state.id)} style={styles.image}/>
                    <View style={styles.overlay}/>
                    <Text style={styles.h3}>{this.state.name}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export default withNavigation(CountryListItemComponent);
