import React,{useState} from 'react';
import {View,TextInput,Text, TouchableOpacity,KeyboardAvoidingView}from 'react-native'
import styles from './styles'
import GenericButton from '../GenericButton'
import Feedback from '../Feedback'
import {registerUser} from 'books-client-logic'
import { AntDesign } from '@expo/vector-icons'; 

export default function Register({goToLogin,goToLanding}){

    const [error,setError] = useState()
    const [name,setName] = useState()
    const [surname,setSurname] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

const handleSubmit = async()=>{
  try {   
       await registerUser(name,surname,email,password)
       goToLogin()
  } catch (error) {
      setError(error.message)
  }
}

    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>REGISTER</Text>
            <KeyboardAvoidingView style={styles.keyboard} behavior='position' enable>
                <View>
                    <TextInput style={styles.input}  placeholder='Name*' 
                    onChangeText={(name) => setName(name)}
                label='name' />
                    <TextInput style={styles.input}  placeholder='Surname*' 
                    onChangeText={(surname) => setSurname(surname)}
                label='surname' />
                    <TextInput style={styles.input} autoCapitalize='none' placeholder='E-mail*' 
                    onChangeText={(email) => setEmail(email)}
                label='email' />
                    <TextInput style={styles.input} autoCapitalize='none' secureTextEntry={true} placeholder='Password*' 
                    onChangeText={(password) => setPassword(password)}
                label='password' />
                </View>
            </KeyboardAvoidingView>

            {error && <Feedback error={error} type={'red'}/>}
           
            <GenericButton text={'Register'} backgroundcolor={'#ff0066'} color={'white'} press={()=>handleSubmit()}/>     
            <View style={styles.navigation1}>
                <View style={styles.navigation2}>
                    <TouchableOpacity onPress={()=>goToLanding()}>
                        <AntDesign name="leftcircle" style={styles.icon}/>
                    </TouchableOpacity>
                    <Text style={styles.icon_text}>Landing</Text>
                </View>
                <View style={styles.navigation2}>
                    <Text style={styles.icon_text}>Login</Text>
                    <TouchableOpacity onPress={()=>goToLogin()}>
                        <AntDesign name="rightcircle" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}