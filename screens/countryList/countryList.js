import {store} from '../../store';
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import CountryListItemComponent from "./country-list-detail/countryListItem";

const styles = StyleSheet.create({
    // h2: {
    //     fontSize: 38,
    //     fontWeight: 'normal',
    //     fontFamily: 'Roboto',
    //     color: '#3c4858'
    // },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        // marginBottom: 50
    }
});

export default class CountryListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: []
        }
    }

    componentDidMount() {
        const countryList = store.countriesOverview;
        console.log(countryList);
        this.setState({
            countryList: countryList
        })
    }

  render() {
        return (
          <View style={styles.flexColumn }>
              {/*<Text style={styles.h2}>Select country</Text>*/}
              <FlatList data={this.state.countryList}
                        keyExtractor={item => item.id}
                        renderItem={({item})=> <CountryListItemComponent country={item}/>}
              />
          </View>
      )
  }
}
