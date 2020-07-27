import React,{useState,useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';


import Feedback from '../Feedback';
import Spinner from '../Spinner';
import ListBooks from '../ListBooks';
import NavbarReturn from '../NavbarReturn';

import {listMyBooks} from 'books-client-logic';
import BookDetails from '../BookDetails';

export default function HomeLanding({goToEnableNavbar,goToDisplayNavbar}) {

const [error,setError] = useState()
const [state,setState] = useState()
const [view,setView] = useState('home')
const [books,setBooks] = useState()
const [book,setBook] = useState()

useEffect(()=>{
  (async() => {
      try {
    
          const books = await listMyBooks()
          setBooks(books)
          setState(true)
      } catch (error) {
      setError(error.message)
      setState(true)
      }
    })()
},[])

const handleGoToHomeLanding = () =>{
    goToDisplayNavbar()  
    listBooks()
}

const listBooks = async() =>{
  setState()  
  setView('home')
  try {
    const books = await listMyBooks()

    setBooks(books)
    setState(true)
  } catch (error) {
    setError(error.message)
    setState(true)
  }
}

const handleViewBook = (book) => {

  goToEnableNavbar()  
  setBook(book)
  setBooks()
  setView('bookDetails')
}


if(!state)return (<Spinner/>)

    return(
    <View style={styles.container}>
      {view === 'bookDetails' && <NavbarReturn text={'Book Details'} goToReturn={handleGoToHomeLanding}/>  }
      {error && <Feedback error={error} type={'#ff0066'}/>}
      {view==='home' && books && <ListBooks text={'My books list'} books={books} goToBook={handleViewBook}/>}
      {view === 'bookDetails' && <BookDetails goToHomeLanding={handleGoToHomeLanding} book={book}/>}
    </View>
    )
}