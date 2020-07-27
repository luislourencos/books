import React, { useState,useEffect} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './styles'


import Spinner from '../Spinner'
import ListBook from '../ListBooks'
import Feedback from '../Feedback'
import NavbarReturn from '../NavbarReturn'
import BookDetailsGlobal from '../BookDetailsGlobal'

import {retrieveRequestedBooks, listShareBooks} from 'books-client-logic'


export default function Share({goToEnableNavbar,goToDisplayNavbar}) {
    const [view,setView] = useState('request')
    const [books,setBooks] = useState()
    const [error,setError] = useState()
    const [state,setState] = useState()
    const [book,setBook] = useState()

    useEffect(()=>{
        (async()=>{
            try {
                
                if(view==='request'){
                    const _books = await retrieveRequestedBooks()
                    setBooks(_books)
                }else if(view==='share'){
                    const __books = await listShareBooks()
                    setBooks(__books)
                }
                setState(true)
            } catch (error) {
                setError(error.message)
                setState(true)
            }
            setTimeout(function(){setError()},2000)
        })()
    },[])


    const handleRequestBooks = async ()=>{
        setState()
        setBooks()
        setView('request')
        try {
            const _books = await retrieveRequestedBooks()
            setBooks(_books)
            setState(true)
        } catch (error) {
            setError(error.message)
            setState(true)
        }
        setTimeout(function(){setError()},2000)
    } 
    const handleShareBooks = async ()=>{
        setState()
        setBooks()
        setView('share')
        try {
            const _books = await listShareBooks()
            setBooks(_books)
            setState(true)
        } catch (error) {
            setError(error.message)
            setState(true)
        }
        setTimeout(function(){setError()},2000)
    
    } 

    const handleGoToBookDetailsGlobal = (book) =>{
        setBook(book)
        setBooks()
        setView('bookDetails')
        goToEnableNavbar()
    }
    

    const handleGoToReturn = async() =>{ 
        setState()
        setBooks()
        setView('request')
        try {
            const _books = await retrieveRequestedBooks()
            setBooks(_books)
            setState(true)
        } catch (error) {
            setError(error.message)
            setState(true)
        }
        setTimeout(function(){setError()},2000)   
        goToDisplayNavbar()
     }
 
    if(!state) return (<Spinner/>)

    return (
       
       <View style={styles.container}>
          {view === 'bookDetails' &&<NavbarReturn text={'Book Details'} goToReturn={handleGoToReturn}/>}
         {view !== 'booksDeteails' && <View style={styles.params}>
            <TouchableOpacity onPress={handleRequestBooks}>
                {view==='share' && <Text style={styles.text}>Requested Books</Text>}    
                {view==='request' &&   <Text style={[styles.text,styles.select]}>Requested Books</Text>}
               </TouchableOpacity>
               <TouchableOpacity onPress={handleShareBooks}>
               {view==='request' && <Text style={styles.text}>Shared Books</Text>}
               {view==='share' && <Text style={[styles.text,styles.select]}>Shared Books</Text>}
               </TouchableOpacity>
           </View>}
           {error && <Feedback error={error} type={'#ff0066'}/>}
           {view==='share' &&<ListBook books={books} goToBook={handleGoToBookDetailsGlobal}/>}
           {view==='request' &&<ListBook books={books} goToBook={handleGoToBookDetailsGlobal}/>}
           {view === 'bookDetails' && <BookDetailsGlobal book={book}/>}

      </View>
   )
}