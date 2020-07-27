import React from 'react';
import {View,Text}from 'react-native'
import styles from './styles'
import GenericButton from '../GenericButton'
import { Entypo } from '@expo/vector-icons'; 

export default function Landing({goToRegister,goToLogin}){

    return(
        <View style={styles.container}>
            <Entypo name="open-book" style={styles.icon} />
            <Text style={styles.description}>This application allows you to recycle your books just by sharing them! We live in a great community of readers and books need to travel and share their knowledge! So there is nothing better than searching and seeing the quantities of books around you, ready to be ordered and shared.</Text>
            <View>
                <GenericButton text={'Register'} backgroundcolor={'#ff0066'} color={'white'} press={()=>goToRegister()}/>
                <GenericButton text={'Login'} backgroundcolor={'#ff0066'} color={'white'} press={()=>goToLogin()}/>
            </View>
        </View>
    )
}