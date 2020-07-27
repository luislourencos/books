import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity}from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import styles from './styles';

import Stars from '../Stars'
import Spinner from '../Spinner'
import Feedback from '../Feedback'
import {retrieveUser,addScore,toggleFollowing,retrieveAvgScore} from 'books-client-logic'

export default function ItemUser({goToUser,id}) {
   
    const [active,setActive] = useState(false)
    const [error,setError] = useState()
    const [user,setUser] = useState()
    const [state,setState] = useState()
    const [avgScore,setAvgScore] = useState()
    const [stars,setStars] = useState(true)

    useEffect(()=>{
        (async()=>{
            try {
                const user = await retrieveUser(id)
                setUser(user)
                setAvgScore(user.avgScore)
                const actualUser = await retrieveUser()
                if(user.followers.includes(actualUser.id)){
                    setActive(true)
                }
                setState(true)
            } catch (error) {
                setError(error.message)
                setState(true)
            }
        })()
    },[])

    const handleFollowing = async() =>{
       
        try{
            await toggleFollowing(user.id)
            if(active){
                setActive(false)
            }else {
                setActive(true)
            }    
        }catch(error){
            setError(error.message)
        }
        setTimeout(function(){setError()},2000)
    }
    const handleGoToUser = () =>{
        goToUser(user.id)
    }

    const handleVote = async(vote) => {
        setState()
        setStars()
        try {
            await addScore(user.id,vote)
            const score = await retrieveAvgScore(user.id)
            setAvgScore(score)
            setState(true)

        } catch (error) {
            setError(error.message)
            setState(true)
        }
        setStars(true)
        setTimeout(function(){setError()},2000)
    }
    if(!state) return (<Spinner/>)

    return (
    
        <View >
            <View style={styles.container}>
                <TouchableOpacity onPress={handleGoToUser}>
                    <SimpleLineIcons name="user" style={styles.image} color="black" />
                </TouchableOpacity>
                <View style={styles.info}>
                    {stars && <Stars avgScore={avgScore} goToVote={handleVote}/>}
                    <Text style={styles.title}>User:</Text>
                    <Text style={styles.body}>{user.email}</Text>
                <View style={styles.hearth}>
                    <TouchableOpacity onPress={handleFollowing}>
                        {!active && <AntDesign name="hearto" style={styles.hearthItem}/>}
                        {active && <AntDesign name="heart" style={[styles.hearthItem,styles.hearthActive]}/>}
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            {error && <Feedback error={error} type={'red'}/>}  
        </View> 
        
      
    );
}