import React,{Component} from "react";
import {View, StyleSheet, Image,Text, TouchableHighlight } from "react-native";
import { Icon } from "react-native-vector-icons/Ionicons";
export default class Category extends Component{
  
    render(){
        return(
        <View style={styles.container}> 
      
            <Text style ={styles.textView}>
               This is Category Page
               </Text>
            
               </View>

        )
    }
}

const styles = StyleSheet.create({
    // container : {
    //   height:'90%',
    //   alignItems:"center",
    //   justifyContent:"center",
     
    // },
    
      container : {
      height :'100%',
      width :'100%',
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'#ffffff'
    },
    
    textView :{
      fontSize :20,
      fontWeight:"bold",
      marginTop:10,
      color:'#33ACFF'
      
    },
    // menu :{
    //   marginTop:5,
    //   height:40,
    //     width:40,

    // }
    
  })
  