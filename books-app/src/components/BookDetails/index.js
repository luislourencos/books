import React, { useState,useEffect} from 'react';
import {View,Text,ScrollView,Alert} from 'react-native';
import styles from './styles'

import NavbarReturn from '../NavbarReturn'
import GenericButton from '../GenericButton'
import Spinner from '../Spinner'
import Feedback from '../Feedback'
import ItemBook from '../ItemBook';

import {deleteBook,retrieveBook} from 'books-client-logic'

export default function BookDetails({goToHomeLanding,book}) {

    const [error,setError] = useState()
    const [state,setState] = useState()
    const [resultBook,setResultBook] = useState()

    useEffect(()=>{
        (async()=>{
            try{
                const result = await retrieveBook(book.id)
                setResultBook(result)
                setState(true)
            }catch(error){
                setError(error.message)
                setState(true)
            } 
        })()
    },[])

    const handleGoToHomeLanding = () => goToHomeLanding()

    const handleBook = () =>{}

    const handleRemoveBook= async() =>{
        Alert.alert(
            'Delete',
            'Do you want to eliminate this book?',
            [{ text: 'Yes', onPress: () => acceptedRemoveBook() },
              {text: 'No',
                onPress: () => {},
                style: 'cancel'}],
                { cancelable: false }
          );
    }

    const acceptedRemoveBook = async()=>{
        try {
            await deleteBook(book.id);
            Alert.alert(
                'Delete',
                'This book was removed from your library!',
                [{text: true,
                onPress: () => handleGoToHomeLanding(),
                style: 'cancel'}],
                { cancelable: false });
        } catch (error) {
          setError(error.message)
        }
    }

    if(!state) return (<Spinner/>)
    return (
       <View style={styles.container}>
            {error && <Feedback error={error} type={'#ff0066'}/>}
        <View style={styles.bookContainer}>
            <ItemBook title={resultBook.title} image={resultBook.image} description={resultBook.description} barCode={resultBook.barCode} goToBook={handleBook}/>
            <View style={styles.informationContainer}> 
                <Text style={styles.title}>Owner:</Text>
                <Text style={styles.body}>{resultBook.ownerUserId.email}</Text>
                <Text style={styles.title}>Km traveled:</Text>
                <Text style={styles.body}>{resultBook.travelKm}</Text>
             </View>
        </View>
        <GenericButton text='remove' backgroundcolor='#ff0066' color='white' press={handleRemoveBook}/>
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description:</Text>
            <ScrollView style={styles.scroll}>
                <Text style={styles.descriptionBody}>{resultBook.description}</Text>
            </ScrollView>
        </View>
      </View>
   )
}