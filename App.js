import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FbS from './screens/facebook';
import IgS from './screens/instagram';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component
{
  render()
  {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, color: '#444444', fontWeight: 'bold'}}>
            Tab Navigation App
          </Text>
        </View>
        <AppContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    height: 120
  }
});

const tabNav = createBottomTabNavigator({
  Facebook: {
    screen: FbS
  },
  Instagram: {
    screen: IgS
  }
});

const AppContainer = createAppContainer(tabNav);