
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:80,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    input:{
        textAlign:'left',
        width:240,
        height:60,
        backgroundColor:'white',
        borderRadius:10,
        margin:5,
        padding:10,
        fontSize:15,
        borderWidth:0.3,
        shadowColor: 'black',
    },
    icon:{
        padding:5,
        fontSize:30,
        color:'#ff0066'
    },
})

export default styles