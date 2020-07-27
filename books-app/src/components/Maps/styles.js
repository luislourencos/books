import panel from '../panel'
import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        // height:'100%',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    mapStyle: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height*0.6,
          },
})

export default styles