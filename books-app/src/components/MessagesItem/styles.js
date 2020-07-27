import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width:'90%',
        height:230,
        justifyContent:'flex-start',
        alignItems:'center',
        margin:5, 
        borderBottomWidth:1
    },
    messageContainer:{
        width:'100%',
        height:100,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    user:{
        justifyContent:'center',
        alignItems:'center'
    },
    userName:{
        color:'#ff0066'
    },
    bookImage:{
        width:60,
        height:80,
        borderWidth:1
    },
    image:{
        margin:3,
        fontSize:40
    },
    mail:{
        fontSize:20,
        color:'#ff0066',
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        marginTop:3,
        textAlign:'left',
        color:'#ff0066',
        fontWeight:'bold'
    },
    date:{
        color:'#ff0066'
    },
   
    body:{
       textAlign:"justify"
    },
    scroll:{
        width:135,
        height:50
    },
    buttonsContainer:{
        width:'100%',
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center'
    }



    
})
export default styles