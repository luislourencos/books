import React from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,Alert}from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles';


import SendMessage from '../SendMessage';
import GenericButtonSmall from '../GenericButtonSmall';


export default function MessagesItem({
    goToUser,
    goToDeleteMessage,
    goToAcceptShare,
    goToSendMessage,
    goToReject,
    idMessage,
    bookImage,
    bookId,
    date,
    textMessage,
    userId,
    userName}) {



const dateFormat = require('dateformat')
var newDateFormat = dateFormat(date," dd/mmmm/yy - HH:MM")

const handleAcceptShare =() =>{
    Alert.alert(
        'Share',
        'Do you Share this book with this user? Please send a message!',
        [{ text: 'Yes', onPress: () => goToAcceptShare(userId,bookId)},
          {text: 'No',style: 'cancel'}],
            { cancelable: false }
      );
}
const handleReject = () =>{
    Alert.alert(
        'Refuse',
        'Do you wanr refuse sharing this book?',
        [{ text: 'Yes', onPress: () => goToReject(userId,bookId,'Sorry!I can`t sharing this book!😔',idMessage) },
          {text: 'No',style: 'cancel'}],
            { cancelable: false }
      );
    
}

const handleDeleteMessage = () =>{
    Alert.alert(
        'Delete',
        'Do you want delete this message?',
        [{ text: 'Yes', onPress: () => goToDeleteMessage(idMessage) },
          {text: 'No',style: 'cancel'}],
            { cancelable: false }
      );
    
}
const handleSendMessage = (message) =>{
    Alert.alert(
        'Send',
        'Do you send This message?',
        [{ text: 'Yes', onPress: () => goToSendMessage(userId,bookId,message) },
          {text: 'No',style: 'cancel'}],
            { cancelable: false }
      );
}
const handleGoToUser = () =>{
    goToUser(userId)
}



    return (
    
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <View style={styles.user}>
                    <TouchableOpacity onPress={handleGoToUser}>
                        <SimpleLineIcons name="user" style={styles.image} color="black" />
                    </TouchableOpacity>
                    <Text styles={styles.userName}>{userName}</Text>
                </View>
                <View style={styles.message}>
                    <View style={styles.titleContainer}>
                        <AntDesign name="mail" style={styles.mail}/>
                        <Text style={styles.date}>{newDateFormat}</Text>
                    </View>
                    <ScrollView style={styles.scroll}>
                        <Text style={styles.body}>{textMessage}</Text>
                    </ScrollView>   
                </View>
                <Image style={styles.bookImage} source={{ uri: bookImage }}/> 
            </View>
            <View style={styles.buttonsContainer}>
                <GenericButtonSmall text='Accept' backgroundcolor='green' color='white' press={handleAcceptShare}/>
                <GenericButtonSmall text='Refuse' backgroundcolor='#ff0066' color='white' press={handleReject}/>
                <GenericButtonSmall text='Delete' backgroundcolor='red' color='white' press={handleDeleteMessage}/>
            </View>    
            <SendMessage goToSendMessage={handleSendMessage}/>
        </View>   
      
    );
}