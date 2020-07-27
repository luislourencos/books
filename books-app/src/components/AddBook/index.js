import React, { useState} from 'react';
import {View,Alert} from 'react-native';
import styles from './styles'


import Scan from '../Scan'
import NavbarReturn from '../NavbarReturn'
import GenericButton from '../GenericButton'
import Search from '../Search'
import Spinner from '../Spinner'
import ListBooks from '../ListBooks'
import Feedback from '../Feedback'


import {findBook,createBook} from 'books-client-logic'
import ItemBook from '../ItemBook';



export default function AddBook({goToHomeLanding}) {
    
    const [view,setView] = useState('landing')
    const [error,setError] = useState()
    const [state,setState] = useState('landing')
    const [books,setBooks] = useState()
    const [book,setBook] = useState()

    const handleReturn = async() => {
      setView('landing')
    }
    const handleGoToScan = () =>{
      setBooks()
      setView('scan')
    }
    const handleGoToHomeLanding = () => goToHomeLanding()
    
    const handleSearch = async(search) =>{
      setBooks()
      setState()
      try {
          const books = await findBook(search)
          setBooks(books)
          setState(true)
      } catch (error) {
        setError(error.message)
        setState(true)
      }
    }

    const handleAddBook = (book) =>setBook(book)
    const handleBook =() =>{}

    const handleCreateBook = async() =>{
      setBook()
      try {
        const {title,image,description,barCode} = book
          await createBook(title,image,description,barCode);
            
            setError('Book added to your library!!!')
            setTimeout(function(){ setError(); }, 2000);
            setState(true)
      } catch (error) {
        setError(error.message)
        setState(true)
      }
    }

  // if(!state)return(<Spinner/>)   

  return (
      <View style={styles.container}>
        {view === 'landing'  && <NavbarReturn text={'Add Books'} goToReturn={handleGoToHomeLanding}/>  }
        {view === 'landing' && <GenericButton text={'Scan'} backgroundcolor={'#ff0066'} color={'white'} press={()=>handleGoToScan()}/>}
        {view === 'scan' && <Scan goToReturn={handleReturn}/>}
        {view !== 'scan' && <View style={styles.container_search}><Search onSearch ={handleSearch}/></View>}
        {!state || error && <Spinner/>}
        {books && !book && view !== 'scan' && <ListBooks column={'2'} books={books}  goToBook={handleAddBook}/>}
        {error && <Feedback error={error} type={'#ff0066'}/>}
        {book && <ItemBook title={book.title} image={book.image} description={book.description} barCode={book.barCode} goToBook={handleBook}/>}
        {book && <GenericButton text={'Add'} backgroundcolor={'green'} color={'white'} press={()=>handleCreateBook()}/>}
      </View>
   )
  
}