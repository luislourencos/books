import React, { useState,useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles'

import Spinner from '../Spinner'
import Feedback from '../Feedback';
import MessagesList from '../MessagesList';
import {retrieveMessages,deleteRecievedMessages,acceptedShareBook,sendMessage} from 'books-client-logic'
import UserDetails from '../UserDetails';
import NavbarReturn from '../NavbarReturn';

export default function Message({goToEnableNavbar,goToDisplayNavbar}) {

   const [error,setError] = useState()
   const [state,setState] = useState()
   const [view,setView] = useState()
   const [messages,setMessages] = useState()
   const [userId,setUserId] = useState()

   useEffect(()=>{
      (async()=>{
      try {
         const messages = await retrieveMessages()
         setMessages(messages)
         setState(true)
      } catch (error) {
         setError(error.message)
         setState(true)
      }      
      })()
   },[])

   const handleGoToUser =(userId) =>{
      setUserId(userId)
      setMessages()
      setView('userDetails')
      goToEnableNavbar()
      setState(true)
   }
   const handleGoToReturn = async() =>{ 
      setView()
         try {
            const messages = await retrieveMessages()
            setMessages(messages)
            setState(true)
         } catch (error) {
            setError(error.message)
            setState(true)
         }      
         goToDisplayNavbar()
   }

   const handleDeleteMessage = async (idMessage) =>{
      setView()
      setState()
      try {
          await deleteRecievedMessages(idMessage)
          setMessages()
         const messages = await retrieveMessages()
         setMessages(messages)
         setState(true)
      } catch (error) {
         setError(error.message)
         setState(true)
      }      
      goToDisplayNavbar()
   }

   const handleSendMessage = async (userId,bookId,message) =>{
      setView()
      setState()
      try {
          await sendMessage(userId,bookId, message)
          setState(true)
          setError('Message send!!!')
          setTimeout(function(){ setError(); }, 2000);
      } catch (error) {
          setError(error.message)
          setState(true)
      }    
      goToDisplayNavbar()
   }

   const handleAcceptShare = async (userId,bookId) =>{
      setView()
      setState()
      try {
          await acceptedShareBook(userId,bookId)
         setMessages()
         const messages = await retrieveMessages()
         setState()
         setMessages(messages)
         setState(true)
      } catch (error) {
         setError(error.message)
         setState(true)
      }      
      goToDisplayNavbar()
   }

   const handleReject = async(userId,bookId,message,idMessage) =>{
      setView()
      setState()
      
      try {
          await sendMessage(userId,bookId, message)
          await deleteRecievedMessages(idMessage)
          setMessages()
          const messages = await retrieveMessages()
          setMessages(messages)
          setState(true)
          setError('Book refuse!!')
          setTimeout(function(){ setError(); }, 2000);
      } catch (error) {
          setError(error.message)
          setState(true)
      }    
      goToDisplayNavbar()
   }
 
    if(!state) return (<Spinner/>)

    return (
       
       <View style={styles.container}>
        {view === 'userDetails'  && <NavbarReturn text={'User Profile'} goToReturn={handleGoToReturn}/>}
        {error && <Feedback error={error} type={'red'}/>}
        {view === 'userDetails' && <UserDetails userId={userId}/>}
        {messages && <MessagesList messages={messages} goToReject={handleReject} goToUser={handleGoToUser} goToSendMessage={handleSendMessage} goToAcceptShare={handleAcceptShare} goToDeleteMessage={handleDeleteMessage}/>}
      </View>
   )
}