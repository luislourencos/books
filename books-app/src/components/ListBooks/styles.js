
import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
    //    marginLeft:40, 
    //    width:'100%',
       justifyContent:"center",
       alignItems:'center',
       height: Dimensions.get('window').height*0.75
    },
    text:{
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
        marginBottom:30,
        color:'#ff0066',
    },
    flat:{
        width:'100%'
    }
})

export default styles