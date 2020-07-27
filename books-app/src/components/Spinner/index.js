import React from 'react';
import {View,ActivityIndicator} from 'react-native';
import styles from './styles'

export default function Spinner (){
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}
