import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

  
    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'#422057FF'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: "#F6F8E8", fontSize: 30}
                    }}
                />
                <TextInput 
                    placeholder="Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}
                    placeholderTextColor='black'/>
                <TextInput
                    placeholder="Author"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    placeholderTextColor='black'
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}>
                   
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1E1D2',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,
      backgroundColor:"#F6F8E8"

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
       backgroundColor:"#F6F8E8"
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
      backgroundColor:"#F6F8E8"
  },
  buttonText: {
      textAlign: 'center',
      backgroundColor: '#422057FF',
      fontWeight: 'bold',
      height: 40,
      width:80,
      borderWidth: 2,
      margin: 10,
      marginLeft:140,
       padding: 6,
       justifyContent:'center',
       color:"#F6F8E8",
  }
});