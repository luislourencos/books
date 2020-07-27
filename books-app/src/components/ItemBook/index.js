import React from 'react';
import {View,Text,Image,TouchableOpacity}from 'react-native'
import styles from './styles';

export default function ItemBook({title,image,description,barCode,id,goToBook}) {

    const handleBook =(title,image,description,barCode,id)=>{
     
        const book={title,image,description,barCode,id}
        goToBook(book)
    }
 
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={()=>handleBook(title,image,description,barCode,id)}>
            <Image style={styles.image} source={{ uri: image }} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}