import React from 'react';
import styles from './styles';
import {View,TouchableOpacity,Text} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

export default function NavbarReturn({goToReturn,text}){

const handleReturn =() =>goToReturn()

return(
<View style={styles.container}>
    <TouchableOpacity onPress={()=>handleReturn()}>
        <Ionicons name="ios-arrow-back" style={styles.item} />
    </TouchableOpacity>
    <Text style={styles.message}>{text}</Text>
</View>)
}