import React from 'react';
import styles from './styles';
import {View,TouchableOpacity} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function NavbarTop({goToLogOut,goToHomeLanding,goToMessages}){

const handleLogOut =() =>goToLogOut()

const handleGoHomeLanding =() => goToHomeLanding()

const handleGoToMessages = () => goToMessages()

return(
<View style={styles.container}>
    <TouchableOpacity onPress={()=>handleGoHomeLanding()}>
        <MaterialIcons name="home" style={styles.item} />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handleGoToMessages()}>
    <MaterialIcons name="mail-outline" style={styles.item} />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>handleLogOut()}>
        <AntDesign name="logout" style={styles.item} />
    </TouchableOpacity>
</View>)
}