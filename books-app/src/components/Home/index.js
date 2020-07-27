import React,{useState,useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';


import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import NavbarBottom from '../NavbarBottom';
import NavbarTop from '../NavbarTop';
import HomeLanding from '../HomeLanding';
import Spinner from '../Spinner';
import AddBook from '../AddBook';
import Searching from '../Searching';
import Messages from '../Messages';
import Following from '../Following';
import Share from '../Share';

import {updateCoordinates} from 'books-client-logic';


export default function Home({onLogOut}){

const [error,setError] = useState()
const [state,setState] = useState()
const [view,setView] = useState('home')
const [navbar,setNavbar] = useState(true)


useEffect(()=>{
  (async function getLocationAsync() {
      try {
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
          const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
          await updateCoordinates(latitude,longitude)
          setState(true)
        } else {
          throw new Error('Location permission not granted');
        }
      } catch (error) {
      setError(error.message)
    }
  })()
},[])


//*************** NAVBARTOP NAVIGATION ************ */

const handleGoToHomeLanding = () =>{
  handleDisplayNavbar()
  setView('home')
} 
const handleGoToMessages = () =>setView('messages')
const handleLogOut=()=>onLogOut()

const handleEnableNavbar = () =>setNavbar(false)
const handleDisplayNavbar = () =>setNavbar(true)

//*************** NAVBARBOTTOM NAVIGATION ************ */

const handleGoToSearch = () =>setView('searching')
const handleGoToAddBooks = () =>{
  handleEnableNavbar();
  setView('addBook');
}
const handleGoToFavorites = () => setView('favorites')
const handleGoToShare = () => setView('share')


// if(!state)return (<Spinner/>)

return(
 <View style={styles.container}>
      {navbar && <NavbarTop 
      goToHomeLanding={handleGoToHomeLanding}
      goToMessages={handleGoToMessages}
      goToLogOut={handleLogOut} 
      />}
      {/* ************************** BODY ****************************** */}

      {view==='home' && <HomeLanding goToEnableNavbar={handleEnableNavbar} goToDisplayNavbar={handleDisplayNavbar}/>}
      {view==='messages' && <Messages goToEnableNavbar={handleEnableNavbar} goToDisplayNavbar={handleDisplayNavbar}/>}
      {view==='searching' && <Searching goToEnableNavbar={handleEnableNavbar} goToDisplayNavbar={handleDisplayNavbar}/>}
      {view==='addBook' && <AddBook goToHomeLanding={handleGoToHomeLanding}/>}
      {view==='favorites' && <Following goToEnableNavbar={handleEnableNavbar} goToDisplayNavbar={handleDisplayNavbar}/>}
      {view === 'share' && <Share goToEnableNavbar={handleEnableNavbar} goToDisplayNavbar={handleDisplayNavbar}/>}
      
      {/* ************************************************************** */}
      {navbar && <NavbarBottom 
      goToSearch={handleGoToSearch}
      goToAddBooks={handleGoToAddBooks}
      goToFavorites={handleGoToFavorites}
      goToShare={handleGoToShare}
      />}
    </View>
    )
}