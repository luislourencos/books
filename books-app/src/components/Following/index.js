import React, { useState,useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles'

import Spinner from '../Spinner'
import ListUsers from '../ListUsers'
import Feedback from '../Feedback'
import UserDetails from '../UserDetails'
import NavbarReturn from '../NavbarReturn'


import {retrieveFollowing} from 'books-client-logic'




export default function Following({goToEnableNavbar,goToDisplayNavbar}) {
    const [error,setError] = useState()
    const [userId,setUserId] = useState()
    const [following,setFollowing] = useState()
    const [state,setState] = useState()
    const [view,setView] = useState('landing')
    
   useEffect(() =>{
    (async()=>{
        try {
            const following = await retrieveFollowing()
            setFollowing(following)
            setView('landing')
            setState(true)
        } catch (error) {
            setError(error.message)
            setState(true)
        }
    })()
   },[])

   const handleGoToReturn = async() =>{ 
    setView()
       try {
          const following = await retrieveFollowing()
          setFollowing(following)
          setState(true)
       } catch (error) {
          setError(error.message)
          setState(true)
       }      
       goToDisplayNavbar()
 }

   const handleGoToUser =(userId) =>{
    setFollowing(null)
    setView('userDetails')
    goToEnableNavbar()
    setState(true)
    setUserId(userId)
 }


  if(!state)return(<Spinner/>)   

  return (
      <View style={styles.container}>
          {view === 'userDetails'  && <NavbarReturn text={'User Profile'} goToReturn={handleGoToReturn}/>}
          {view === 'userDetails' && userId && <UserDetails userId={userId}/>}
          {error && <Feedback error={error} type={'#ff0066'}/>}
          { following && view !== 'userDetails' &&<ListUsers goToUser={handleGoToUser} text={'List Following'} users={following}/>}
      </View>
   )
  
}


