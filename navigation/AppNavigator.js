import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import CountryListComponent from '../screens/countryList/countryList';
import HomeScreen from "../screens/HomeScreen";
import CountryOverviewComponent from '../screens/country-overview/countryOverview'

export default createAppContainer(
  // createSwitchNavigator({
  //   // You could add another route here for authentication.
  //   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //     Main: MainTabNavigator,
  //     Home: {screen: HomeScreen},
  //     CountryList: {screen: CountryListComponent},
  //     CountryOverview: {screen: CountryOverviewComponent}
  // })

    createStackNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: MainTabNavigator,
        Home: {screen: HomeScreen},
        CountryList: {screen: CountryListComponent},
        CountryOverview: {screen: CountryOverviewComponent}
    }, {
        headerMode: "none"
    })
);
