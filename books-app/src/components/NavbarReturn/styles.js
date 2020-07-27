import panel from '../panel'
import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        backgroundColor: 'green', 
    },
    item:{
        margin:5,
        marginLeft:10,
        marginRight:10,
        fontSize:40,
        color:'white'
    },
    message:{
        color:'white',
        fontSize:20,
        paddingRight:20,
        fontWeight:'bold'
    }
})
