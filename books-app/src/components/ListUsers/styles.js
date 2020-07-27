
import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginLeft:5,
       justifyContent:"flex-start",
       alignItems:'center',
       height: Dimensions.get('window').height*0.66
    },
    flat:{
        width:'100%',
        height:'30%'
    },
    text:{
        margin:10,
        fontSize:20,
        fontWeight:'bold',
        color:'#ff0066',
    }
})

export default styles