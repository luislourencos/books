import React, { useState,useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles'

import ItemUser from '../ItemUser'
import ListBooks from '../ListBooks'
import Spinner from '../Spinner'
import Feedback from '../Feedback'
import BookDetailsGlobal from '../BookDetailsGlobal'
import {listMyBooks} from 'books-client-logic'

export default function UserDetails({userId}) {

    const [error,setError] = useState()
    const [books,setBooks] = useState()
    const [book,setBook] = useState()
    const [state,setState] = useState()
    const [view,setView] = useState()

    useEffect(()=>{
        (async()=>{
        try {
           const books = await listMyBooks(userId)
           setBooks(books)
           setState(true)
        } catch (error) {
           setError(error.message)
           setState(true)
        }      
        })()
     },[])

     const handleGoToBookDetailsGlobal = (book) =>{
        setBook(book)
        setBooks()
        setView('bookDetails')
    } 
    const handleGoToReturn = () =>{
        goToReturn()
    }
    const handleGoToUser = () =>{}

    if(!state) return (<Spinner/>)
    return(
            <View style={styles.container}>
            {view !== 'bookDetails' && <ItemUser goToUser={handleGoToUser}  id={userId}/>}
            {error && <Feedback error={error} type={'#ff0066'}/>}
            {books && <ListBooks books={books}  goToBook={handleGoToBookDetailsGlobal}/>}
            {view === 'bookDetails' && <BookDetailsGlobal goToReturn={handleGoToReturn} book={book}/>}
            </View>
   )
}