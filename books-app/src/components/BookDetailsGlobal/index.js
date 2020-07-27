import React, { useState,useEffect} from 'react';
import {View,Text,ScrollView,Alert} from 'react-native';
import styles from './styles'


import GenericButton from '../GenericButton'
import Spinner from '../Spinner'
import Feedback from '../Feedback'
import ItemBook from '../ItemBook';
import SendMessage from '../SendMessage';

import {retrieveBook, sendMessage,addRequestedBook} from 'books-client-logic'

export default function BookDetailsGlobal({book}) {
    const [error,setError] = useState()
    const [state,setState] = useState()
    const [retrieveResult,setRetrieveResult] = useState()
    const [displayInputMessage,setDisplayInputMessage] = useState(false)

    useEffect(()=>{
        (async()=>{
            try{
                const result = await retrieveBook(book.id)
                setRetrieveResult(result)
                setState(true)
            }catch(error){
                setError(error.message)
                setState(true)
            } 
        })()
    },[])

    const handleGoToHomeLanding = () => goToRetun()

    const handleBook = () =>{}

    const handleMessage = () =>{
        setDisplayInputMessage(true)
    }
    const handleSendMessage = (message) =>{
        Alert.alert(
            'Send Message',
            'Do you want send a Message to this user',
            [{ text: 'Yes', onPress: () => acceptedSendMessage(message) },
              {text: 'No',style: 'cancel'}],
                { cancelable: false }
          );
    }

    const acceptedSendMessage = async (message) =>{
        setState()
        try {
            await addRequestedBook(book.id)
            await sendMessage(retrieveResult.actualUserId._id,retrieveResult.id, message)
            setState(true)
            setDisplayInputMessage(false)
            setError('Message Send!')
            setTimeout(function(){setError()},2000)
        } catch (error) {
            setError(error.message)
            setState(true)
        }
        
    }

    if(!state) return (<Spinner/>)

    return (
       <View style={styles.container}>
        {displayInputMessage && <SendMessage goToSendMessage={handleSendMessage}/>}
        {error && <Feedback error={error} type={'#ff0066'}/>}
        <View style={styles.bookContainer}>
            <ItemBook title={retrieveResult.title} image={retrieveResult.image} description={retrieveResult.description} barCode={retrieveResult.barCode} goToBook={handleBook}/>
            <View style={styles.informationContainer}> 
                <Text style={styles.title}>Actual Owner:</Text>
                <Text style={styles.body}>{retrieveResult.actualUserId.email}</Text>
                <Text style={styles.title}>Km traveled:</Text>
                <Text style={styles.body}>{retrieveResult.travelKm}</Text>
             </View>
        </View>
        {!displayInputMessage &&<GenericButton text='Request Book' backgroundcolor='#ff0066' color='white' press={handleMessage}/>}
 
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description:</Text>
            <ScrollView style={styles.scroll}>
                <Text style={styles.descriptionBody}>{retrieveResult.description}</Text>
            </ScrollView>
        </View>
      </View>
   )
}