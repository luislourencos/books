import React,{useState} from 'react';
import {View,TextInput,Text,TouchableOpacity,KeyboardAvoidingView}from 'react-native'
import styles from './styles'
import GenericButton from '../GenericButton'
import Feedback from '../Feedback'
import {loginUser} from 'books-client-logic'
import { AntDesign } from '@expo/vector-icons'; 


export default function Login({goToLanding,goToRegister,goToHome}){

    const [error,setError] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword]= useState()

    const handleGoToRegister = ()=>{
        goToRegister()
    }

    const handleSubmit = async()=>{
        try {
           await loginUser(email,password)
            goToHome()
        } catch (error) {
            setError(error.message)
        }
    }

    return(
        <View style={styles.container}>
             
                <Text style={styles.title}>LOGIN</Text>
                <KeyboardAvoidingView style={styles.keyboard} behavior='position' enable>
                <View>
                    <TextInput style={styles.input} autoCapitalize='none' placeholder='E-mail*' 
                    onChangeText={(email) => setEmail(email)}
                label='email' />
                    <TextInput style={styles.input} autoCapitalize='none' secureTextEntry={true} placeholder='Password*' 
                    onChangeText={(password) => setPassword(password)}
                label='password' />
                </View>
             </KeyboardAvoidingView>
      
            {error && <Feedback error={error} type={'red'}/>}
            <GenericButton text={'Login'} backgroundcolor={'#ff0066'} color={'white'} press={()=>handleSubmit()}/>
            
            <View style={styles.navigation1}>
                <View style={styles.navigation2}>
                    <TouchableOpacity onPress={()=>goToRegister()}>
                        <AntDesign name="leftcircle" style={styles.icon}/>
                    </TouchableOpacity>
                    <Text style={styles.icon_text}>Register</Text>
                </View>
                <View style={styles.navigation2}>
                    <Text style={styles.icon_text}>Landing</Text>
                    <TouchableOpacity onPress={()=>goToLanding()}>
                        <AntDesign name="rightcircle" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}