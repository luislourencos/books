import panel from '../panel'
import {StyleSheet} from 'react-native'

 const styles = StyleSheet.create({
    container:{
        width:240,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        margin:10,
        shadowColor: 'black',
        shadowOpacity: 0.4,
    },
    letters:{
        fontWeight:'bold'
    },
    large:{
        width:240
    },
    small:{
        width:120
    }
})
export default styles