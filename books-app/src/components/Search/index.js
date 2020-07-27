import React, {useState} from 'react';
import { TextInput, View ,TouchableOpacity} from 'react-native';
import styles from './styles'
import { Octicons } from '@expo/vector-icons'; 

export default function Search ({onSearch}){
    const [search,setSearch] = useState()

    const handleSearch = () =>{
        onSearch(search)
    }
    
    return(
        <View style ={ styles.container}>
        <TextInput style={styles.input}  placeholder='Search*' 
            onChangeText={(search) => setSearch(search)}
            label='search' />
            <TouchableOpacity onPress={()=>{handleSearch()}}>
                <Octicons name="search" style={styles.item} />
            </TouchableOpacity>
        </View>
    )
}


