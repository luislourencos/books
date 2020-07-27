import React,{useState,useEffect} from 'react';
import {View,TouchableOpacity,Alert} from 'react-native';
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Stars ({avgScore,goToVote}){

const [active1,setActive1]=useState() 
const [active2,setActive2]=useState() 
const [active3,setActive3]=useState() 
const [active4,setActive4]=useState() 
const [active5,setActive5]=useState() 
 

    useEffect(()=>{
        if(!avgScore){
            avgScore = 0
        }

    avgScore <= 6 && handlePress5();
    avgScore <5 && handlePress4();
    avgScore <4 && handlePress3();
    avgScore <3 && handlePress2();
    avgScore <2 && handlePress1();
    avgScore <1 && handlePress0();
    },[])


    const handlePress0 = () =>{
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
    }
    const handlePress1 = () =>{
        setActive1(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(false)
       
    }
    const handlePress2 = () =>{
        setActive1(true)
        setActive2(true)
        setActive3(false)
        setActive4(false)
        setActive5(false)

    }
    const handlePress3 = () =>{
        setActive1(true)
        setActive2(true)
        setActive3(true)
        setActive4(false)
        setActive5(false)
   
    }
    const handlePress4 = () =>{
        setActive1(true)
        setActive2(true)
        setActive3(true)
        setActive4(true)
        setActive5(false)
     
    }
    const handlePress5 = () =>{
        setActive1(true)
        setActive2(true)
        setActive3(true)
        setActive4(true)
        setActive5(true)
    
    }
  
    const handleVote = (vote) =>{Alert.alert(
        'Vote',
        `Do you want to give ${vote} this Person`,
        [{ text: 'Yes', onPress: () => handleAddScore(vote) },
          {text: 'No',
            onPress: () => {},
            style: 'cancel'}],
            { cancelable: false }
    )}

    const handleAddScore =(vote)=>{
       goToVote(vote)
    }

    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>handleVote(1)}>
        {!active1 && <MaterialCommunityIcons name="star-outline" style={styles.start}/>}
        {active1 && <MaterialCommunityIcons name="star" style={[styles.start,styles.active]} />}
        </TouchableOpacity>    
        <TouchableOpacity onPress={()=>handleVote(2)}>
        {!active2 && <MaterialCommunityIcons name="star-outline" style={styles.start}/>}
        {active2 && <MaterialCommunityIcons name="star" style={[styles.start,styles.active]} />}
        </TouchableOpacity>    
        <TouchableOpacity onPress={()=>handleVote(3)}>
        {!active3 && <MaterialCommunityIcons name="star-outline" style={styles.start}/>}
        {active3 && <MaterialCommunityIcons name="star" style={[styles.start,styles.active]} />}
        </TouchableOpacity>    
        <TouchableOpacity onPress={()=>handleVote(4)}>
        {!active4 && <MaterialCommunityIcons name="star-outline" style={styles.start}/>}
        {active4 && <MaterialCommunityIcons name="star" style={[styles.start,styles.active]} />}
        </TouchableOpacity>    
        <TouchableOpacity onPress={()=>handleVote(5)}>
        {!active5 && <MaterialCommunityIcons name="star-outline" style={styles.start}/>}
        {active5 && <MaterialCommunityIcons name="star" style={[styles.start,styles.active]} />}
        </TouchableOpacity>    
        </View>
    )
}
