import panel from '../panel'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input:{
        textAlign:'center',
        width:250,
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        margin:5,
        padding:10,
        fontSize:20,
        borderBottomWidth:0.3,
        shadowColor: 'black',
    },
    keyboard:{
        padding:10
    },
    title:{
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
        color: 'green',
        fontSize: 20
    },
    navigation1:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-around'
       
    },
    navigation2:{
        flexDirection:'row',
        alignItems:'center'
    },

    icon:{
        padding:10,
        fontSize:30,
        color:'green'
    },
    icon_text:{
        fontWeight:'bold',
        color:'#ff0066'
    }
})

export default styles