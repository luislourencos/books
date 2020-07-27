import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width:'95a%',
        height:130,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        borderWidth:1,
        borderRadius:10,
        backgroundColor: 'white',
        shadowColor: 'black',
    },
    image:{
        margin:10,
        fontSize:80
    },
    title:{
        textAlign:'left',
        color:'#ff0066',
        fontWeight:'bold'
    },
    body:{

    },
    info:{
        width:'60%',
        height:'100%',
        margin:5
    },
    hearth:{
        width:'100%',
        position:'relative',
        left:90
    },
    hearthItem:{
        fontSize:40
    },
    hearthActive:{
        color:'red'
    }


    
})
export default styles