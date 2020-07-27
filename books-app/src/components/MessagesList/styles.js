
import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
       justifyContent:"center",
       alignItems:'center',
       height: Dimensions.get('window').height*0.70
    },
    flat:{
        width:'100%',
        height:'30%'
    }
})

export default styles