import React from 'react';
import {View,Text,FlatList}from 'react-native'
import styles from './styles';
import ItemUser from '../ItemUser';

export default function ListUsers({goToUser,text,users}){

const handleGoToUser = (userId)=>{
    goToUser(userId)
}

    return(
     <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <FlatList style={styles.flat} showsHorizontalScrollIndicator={false}
            data={users}
            renderItem={({ item }) => <ItemUser goToUser={handleGoToUser} id={item.id} />}
            keyExtractor={item => item.id}
        />
    </View>
    )
}




