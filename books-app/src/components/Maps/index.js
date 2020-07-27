import React from 'react';
import MapView from 'react-nat  ive-maps';
import { View } from 'react-native';
import styles from './styles'
export default function Maps() {
 

    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    )
  
}
