import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles'

export default function Feedback ({error,type}){
    return(
        <View style={styles.container}>
            <Text style={[{color:`${type}`},styles.feedback]}>{error}</Text>
        </View>
    )
}