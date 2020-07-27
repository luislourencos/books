import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import styles from './styles';

export default function GenericButton({text,backgroundcolor,color,press}) {

    return(

        <TouchableOpacity style={[styles.container,{backgroundColor:`${backgroundcolor}`}]} onPress={()=>press()}>
            <Text style={[styles.letters,{color:`${color}`}]}>{text}</Text>
        </TouchableOpacity>
    )
}