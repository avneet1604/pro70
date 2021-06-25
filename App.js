import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen
},{
defaultNavigationOptions : ({navigation})=>({
 tabBarIcon: ({})=>{
   const routeName = navigation.state.routeName
   if(routeName==="WriteStory"){
    return(
      <Image style={{width:30,height:30,}}source={require("./assets/write.png")}/>
    )
   }else if(routeName==="ReadStory"){
    return(
      <Image
      source={require('./assets/read.png')}
      style={{width:40, height:40}}/>
    )
    }
 }
})
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});