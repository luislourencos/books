import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    item:{
        margin:5,
        marginLeft:10,
        marginRight:10,
        fontSize:40,
        color:'green'
    },
    input:{
        textAlign:'right',
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
    container_search:{
        flexDirection:'row'
    }
})