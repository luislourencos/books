import React from 'react';
import {View,FlatList}from 'react-native'
import styles from './styles';
import MessagesItem from '../MessagesItem';

export default function MessagesList({goToUser,goToSendMessage,goToDeleteMessage,goToReject,goToAcceptShare,messages}){

const handleGoToUser =(userId)=>{
    goToUser(userId)
}    
const handleDeleteMessage =(idMessage) =>{
    goToDeleteMessage(idMessage)
}
const handleAcceptShare =(userId,bookId) =>{
    goToAcceptShare(userId,bookId)
}
const handleSendMessage=(userId,bookId,message)=>{
    goToSendMessage(userId,bookId,message)
}
const handleReject=(userId,bookId,message,idMessage)=>{
    goToReject(userId,bookId,message,idMessage)
}
    return(
     <View style={styles.container}>
        <FlatList style={styles.flat} showsHorizontalScrollIndicator={false}
            data={messages}
            renderItem={({ item }) =>
            <MessagesItem 
            idMessage={item.id}
            bookImage={item.bookId.image} 
            bookId={item.bookId._id} 
            date={item.date} 
            textMessage={item.textMessage}
            userId={item.fromUserId._id}
            userName={item.fromUserId.name}
            goToUser={handleGoToUser}
            goToDeleteMessage={handleDeleteMessage}
            goToAcceptShare={handleAcceptShare}
            goToSendMessage={handleSendMessage}
            goToReject={handleReject}
            />
            }
            keyExtractor={item => item.id}
        />
    </View>
    )
}



