import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';

import GenericButton from '../GenericButton'
import styles from './styles'
import NavbarReturn from '../NavbarReturn'
import Spinner from '../Spinner'
import ItemBook from '../ItemBook';
import Feedback from '../Feedback';

import {findBook,createBook} from 'books-client-logic'


export default function Scan({goToReturn}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [state,setState] = useState(false)
  const [book,setBook] = useState()
  const [error,setError] = useState()

  const handleReturn = () =>{
      goToReturn()
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      setState(true)
    })();
  }, []);

  const handleBarCodeScanned = async({ data }) => {
    setError()
    setState()
    setScanned(true);
    try {
        const books = await findBook(data)
        const [book] = books
        setBook(book)
        setState(true)
    } catch (error) {
        setError(error.message)
        setState(true)
    }
  }

  const handleAddBook = async() =>{
    try {
      const {title,image,description,barCode} = book
        await createBook(title,image,description,barCode);
        setError('The book was added to your library!')
        setTimeout(function(){ setError();setBook(); }, 2000);
    } catch (error) {
      setError(error.message)
    }
  }


  return (
    <View style={styles.container}>
        <NavbarReturn text={'Scaner'} goToReturn={handleReturn}/>
        {state && !book && <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.barcode}/>}
        {error && <Feedback error={error} type={'#ff0066'}/>}
        {!state && <Spinner/>}
        {book && <ItemBook title={book.title} image={book.image}/>}
        {book && <GenericButton text={'Add'} backgroundcolor={'green'} color={'white'} press={()=>handleAddBook()}/>}
        {state && !book && <GenericButton text={'Scan'} backgroundcolor={'#ff0066'} color={'white'} press={()=>setScanned(false)}/>}
    </View>
  );
}