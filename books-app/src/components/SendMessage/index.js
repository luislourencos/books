import React,{useState} from 'react';
import {View,TextInput,TouchableOpacity}from 'react-native'
import styles from './styles'

import { FontAwesome } from '@expo/vector-icons'; 

export default function SendMessage({goToSendMessage}){

    const [message,setMessage] = useState()

    const handleSendMessage = () =>goToSendMessage(message)
    
    return(
        <View style={styles.container}>
            <TextInput  multiline
        numberOfLines={3} style={styles.input}  placeholder='Message*' 
                onChangeText={(message) => setMessage(message)}
                label='message' />
            <TouchableOpacity onPress={handleSendMessage}>
                <FontAwesome name="send" style={styles.icon} />  
            </TouchableOpacity> 
        </View>
    )
}