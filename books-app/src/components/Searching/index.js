import React, { useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './styles'

import NavbarReturn from '../NavbarReturn'
import Spinner from '../Spinner'
import Search from '../Search'
import ListUsers from '../ListUsers';
import ListBooks from '../ListBooks';
import Feedback from '../Feedback';
import BookDetailsGlobal from '../BookDetailsGlobal';
import UserDetails from '../UserDetails';

import {searchBook,searchUser} from 'books-client-logic'




export default function Searching({goToEnableNavbar,goToDisplayNavbar}) {
    const [view,setView] = useState('main')
    const [params,setParams] = useState('book')
    const [search,setSearch] = useState()
    const [state,setState] = useState(true)
    const [error,setError] = useState()
    const [users,setUsers] = useState()
    const [books,setBooks] = useState()
    const [book,setBook] = useState()
    const [userId,setUserId] = useState()

     
    const handleSearchByBook = () =>{
        setError()
        setUsers()
        setParams('book')
    }
    const handleSearchByUser = () =>{
        setError()
        setBooks()
        setParams('user')
    }
    const handleSearch = (search) =>{  
        setBooks()
        setError()
        if(params==='user'){
            handleListUsers(search)
        }else{
            handleListBooks(search)
        }
        setSearch(search)
    }

    const handleListUsers = async(search) => {
        setBooks()
        setError()
        setState()
        try {
            const users = await searchUser(search)
            setUsers(users)
            setState(true)
        } catch (error) {
            setError(error.message)
            setState(true)
        }

    }
    const handleListBooks = async(search) => {
        setUsers()
        setState()
        try {
            const books = await searchBook(search)
            setBooks(books)
            setState(true)
           
        } catch (error) {
            setError(error.message)
            setState(true)
        }
    }

    const handleGoToBookDetailsGlobal = (book) =>{
        setBook(book)
        setBooks()
        setView('bookDetails')
        goToEnableNavbar()
    }
    const handleGoToReturn = async() =>{

        goToDisplayNavbar()
        setView('main')
        if(params==='user'){
            handleListUsers(search)
        }else{
            handleListBooks(search)
        }
        setSearch(search)
    }

    const handleGoToUserDetails = (userId) =>{
        setUsers()
        goToEnableNavbar()
        setUserId(userId)
        setView('userDetails')
    }
 
    if(!state) return (<Spinner/>)

    return (
       
       <View style={styles.container}>
           {view === 'bookDetails'  && <NavbarReturn text={'Request Book'} goToReturn={handleGoToReturn}/>  }
           {view === 'userDetails'  && <NavbarReturn text={'User Profile'} goToReturn={handleGoToReturn}/>}
           {view === 'main' && <View style={styles.params}>
            <TouchableOpacity onPress={handleSearchByUser}>
                {params==='book' && <Text style={styles.text}>By user</Text>}    
                {params==='user' &&   <Text style={[styles.text,styles.select]}>By user</Text>}
               </TouchableOpacity>
               <TouchableOpacity onPress={handleSearchByBook}>
               {params==='user' && <Text style={styles.text}>By book</Text>}
               {params==='book' && <Text style={[styles.text,styles.select]}>By book</Text>}
               </TouchableOpacity>
           </View>}
           {view === 'bookDetails' && <BookDetailsGlobal book={book}/>}
           {view === 'main' && <Search onSearch={handleSearch}/> }
           {error && <Feedback error={error} type={'#ff0066'}/>}
           {users && <ListUsers users={users} goToUser={handleGoToUserDetails}/>}
           {view === 'userDetails' && <UserDetails userId={userId}/>}
           {books && <ListBooks books={books} goToBook={handleGoToBookDetailsGlobal} />}
      </View>
   )
}