import {store} from '../../store';
import { StackActions, NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import  LocationListItemComponent  from '../list-item/ListItem';
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
import {SideSwipeListComponent} from "../side-swipe-list/sideSwipeList";

const styles = StyleSheet.create({
    countryLi: {
        height: 200
    },
    flexColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff'
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
    headSection: {
        height: 250,
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // paddingBottom: 40
    },
    whiteFontColor: {
        color: 'white'
    },
    h4: {
        fontSize: 30,
        margin: 20,
        fontWeight: '300'
    },
    bodySection: {
        flex: 3,
    },
    hoistUp: {
        position: 'absolute',
        top: -40,
        bottom: 0,
        display: 'flex',
        // justifyContent: 'space-between',
        flexDirection: 'column',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // overflow: 'hidden',
        backgroundColor: '#fffff2',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        paddingBottom: 20
    },
    marginBottom40: {
        marginBottom: 60
    },
    countryDescriptionText: {
        lineHeight: 20,
        padding: 20,
        color: '#3c4858',
        fontStyle: 'italic',
        textAlign: 'justify'
    },
    locationList: {
    },
    subHeader: {
        fontSize: 18,
        color: '#3c4858',
        marginLeft: 20
    },
    backButton: {
        margin: 20,
        fontSize: 14
    }
});

export default class CountryOverviewComponent extends Component {
    constructor(props) {
        super();
        console.log(props);
        this.state = {
            id: this.props.navigation.state.params.id
        }
    }

    componentDidMount() {
        const countryInformation = store.countries.filter(countryObj => countryObj.id === this.state.id)[0];
        console.log(countryInformation)
        const destinationsList = store.locations[this.state.id];
        this.setState({
            countryInformation: countryInformation,
            destinationsList: destinationsList
        })
    }

    goBack() {
        console.log(this.props);
        const popAction = StackActions.pop({
            n: 1,
        });
        this.props.navigation.dispatch(popAction);
    }

    imageDecider(countryId) {
        const imagePaths = {
            thailand: require('../../assets/images/thailand-country-list-image.jpg'),
            vietnam: require('../../assets/images/vietnam-country-list-image.jpg'),
            cambodia: require('../../assets/images/cambodia-country-list-image.jpg'),
            philippines: require('../../assets/images/indonesia-country-list-image.jpg'),
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
            <View style={styles.flexColumn}>
                <View style={styles.headSection}>
                    <Image source={this.imageDecider(this.state.id)} style={styles.image}/>
                    <View style={styles.overlay}/>
                    <TouchableHighlight style={styles.backButton} onPress={() => this.goBack()}>
                        <Text style={styles.whiteFontColor}>Back</Text>
                    </TouchableHighlight>
                    <Text style={[styles.whiteFontColor, styles.h4, styles.marginBottom40]}>{this.state.countryInformation ? this.state.countryInformation.name : '' }</Text>
                </View>
                <View style={styles.bodySection}>
                    <View style={styles.hoistUp}>
                        <Text style={styles.countryDescriptionText}>{this.state.countryInformation ? this.state.countryInformation.description : ''}</Text>
                        {/*<Text>{this.state.countryInformation ? this.state.countryInformation.currency : ''}</Text>*/}
                        <View style={styles.locationList}>
                            <Text style={styles.subHeader}>Locations</Text>
                            {this.state.destinationsList ? <SideSwipeListComponent list={this.state.destinationsList}/> : <Text>Loading</Text>}
                            {/*<FlatList horizontal={true} data={this.state.destinationsList}  keyExtractor={item => item.id} renderItem={({item, index}) => <LocationListItemComponent key={index} listLength={this.state.destinationsList.length} index={index} location={item}/>}/>*/}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
