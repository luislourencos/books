import React from 'react';
import {View,Text,FlatList}from 'react-native'
import styles from './styles';
import ItemBook from '../ItemBook';

export default function ListBooks({text,books,goToBook}){

    const handleBook = (book) =>{
        goToBook(book)
       
    }
    return(
     <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        {books && (<>
            <FlatList style={styles.flat} showsHorizontalScrollIndicator={false} 
                numColumns={'2'}
                data={books}
                renderItem={({ item }) => <ItemBook title={item.title} image={item.image} description={item.description} barCode={item.barCode} id={item.id} goToBook={handleBook}/>}
                keyExtractor={item => item.id}
            />
        </>)}
    </View>
    )
}





