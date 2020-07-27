import React from 'react';
import styles from './styles';
import {View,TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function NavbarBottom({
    goToMaps,
    goToSearch,
    goToAddBooks,
    goToFavorites,
    goToShare
}){
    
  const handleMaps = () => goToMaps()
  const handleAddBook = () =>goToAddBooks()
  const handleSearch = () => goToSearch()
  const handleFavorites = () => goToFavorites()
  const handleShare = () => goToShare()  

return(
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={handleMaps}>
            <MaterialCommunityIcons name="map-search-outline" style={styles.item} />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={handleSearch}>
                <Feather name="eye" style={styles.item} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddBook}>
                <Ionicons name="ios-add-circle-outline" style={styles.item} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFavorites}>
                <Feather name="heart" style={styles.item} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare}>
                <FontAwesome name="exchange" style={styles.item} />
            </TouchableOpacity>  
        </View> )
}