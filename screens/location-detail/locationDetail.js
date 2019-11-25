import {store} from '../../store';
import { StackActions, NavigationActions } from 'react-navigation';
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
import {SideSwipeListComponent} from "../side-swipe-list/sideSwipeList";
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    flexColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    gradient: {
        position: 'absolute',
        // resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    // overlay: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: '#404040',
    //     opacity: 0.4
    // },
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
        right: 0,
        left: 0,
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
    marginBottom50: {
        marginBottom: 50
    },
    descriptionText: {
        lineHeight: 20,
        padding: 20,
        color: '#3c4858',
        fontStyle: 'italic',
        textAlign: 'justify'
    },
    locationList: {
    },
    backButton: {
        margin: 20,
        // fontSize: 14
    }
});

export default class LocationDetailComponent extends Component {
    constructor(props) {
        super(props);
        console.log('location detail props: ', props);
        this.state = {
            id: this.props.navigation.state.params.id
        }
    }

    componentDidMount() {
        const locationInformation = store.locations[this.state.id];
        console.log(locationInformation)
        // const destinationsList = store.locations[this.state.id];
        this.setState({
            locationInformation: locationInformation,
        })
    }

    goBack() {
        console.log(this.props);
        const popAction = StackActions.pop({
            n: 1,
        });
        this.props.navigation.dispatch(popAction);
    }

    render() {
        return(
            <View style={styles.flexColumn}>
                <View style={styles.headSection}>
                    <LinearGradient style={styles.gradient} colors={['#A8BFFF', '#884D80']}/>
                    <TouchableHighlight style={styles.backButton} onPress={() => this.goBack()}>
                        <Text style={styles.whiteFontColor}>Back</Text>
                    </TouchableHighlight>
                    <Text style={[styles.whiteFontColor, styles.h4, styles.marginBottom50]}>{this.state.locationInformation ? this.state.locationInformation.name : '' }</Text>
                </View>
                <View style={styles.bodySection}>
                    <View style={styles.hoistUp}>
                        <Text style={styles.descriptionText}>{this.state.locationInformation ? this.state.locationInformation.description : ''}</Text>
                        {/*<Text>{this.state.countryInformation ? this.state.countryInformation.currency : ''}</Text>*/}
                        {/*<View style={styles.locationList}>*/}
                            {/*{this.state.destinationsList ? <SideSwipeListComponent input={{navigationScreen: 'LocationOverview', list: this.state.destinationsList, listTitle: 'Attractions'}}/> : <Text>Loading</Text>}*/}
                        {/*</View>*/}
                    </View>
                </View>
            </View>
        )
    }
}
