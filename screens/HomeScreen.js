import React, { Component } from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'relative'
  },
  homeViewOverlay: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    position: 'absolute',
    // justifyContent: 'flex-end'
  },
  homeTitle: {
    fontSize: 36,
    color: '#3c4858',
    fontWeight: 'bold'
  },
  buttonContainer: {
    height: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    height: '80%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  titleBox: {
    position: 'relative',
    top: -70,
    display: 'flex',
    flexDirection: 'column',
    margin: 20
  },
  button: {
    height: 60,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  buttonText: {
    color: '#3c4858',
    textTransform: 'uppercase'
  }
});

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={styles.container}>
          <Image
              style={styles.homeImage}
              source={require('../assets/images/home-screen-sea-cropped.jpg')}
          />
          <View style={styles.homeViewOverlay}>
            <View style={styles.titleContainer}>
              <View style={styles.titleBox}>
                <Text style={styles.homeTitle}>Travel</Text>
                <Text style={styles.homeTitle}>Companion</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('CountryList')}>
                <Text style={styles.buttonText}>Start Exploring</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};
