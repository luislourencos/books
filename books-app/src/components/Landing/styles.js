import panel from '../panel'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    input:{
        width:250,
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        margin:5,
        padding:10,
        borderBottomWidth:0.3,
        shadowColor: 'black',
    },
    description:{
        color:'green',
        padding:15,
        fontSize:20,
        textAlign:'justify'
    },
    icon:{
        fontSize:100,
        color:'#ff0066',
        paddingTop:20
    }
})

export default styles