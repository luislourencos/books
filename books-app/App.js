import React,{useState,useEffect}from 'react';
import {AsyncStorage,SafeAreaView} from 'react-native'
import styles from './styles';
import logic ,{logoutUser,isUserLoggedIn,isUserSessionValid} from 'books-client-logic'
// import {REACT_APP_API_URL} from './.env'

logic.__context__.API_URL = 'http://192.168.9.107:8080'
//logic.__context__.API_URL = 'http://localhost:8080'
logic.__context__.storage = AsyncStorage


import {Landing,Register,Login,Home,Spinner} from './src/components'

export default function App() {


  const [view,setView] = useState('landing')
  const [error,setError] = useState('login')
  const [state,setState] = useState()


  useEffect(()=>{
    (async()=>{
      try{
        await isUserLoggedIn()
        await isUserSessionValid()
        setView('home')
        setState(true)
      }catch(error){
        setView('login')
        setState(true)
      }
    })()
  },[])

  const handleGoToLanding = () =>setView('landing')
  const handleGoToLogin = () =>setView('login')
  const handleGoToRegister = () =>setView('register')
  const handleGoToHome = () =>setView('home')


  
  const handleLogOut= async() =>{
    try {
      await logoutUser()
      setView('landing')
    } catch (error) {
      setError(error.message)
    }
  }


  //  if(!state) return (<Spinner/>)
  return (
      <SafeAreaView style={styles.container}>
        {view==='landing' && <Landing goToLogin={handleGoToLogin} goToRegister={handleGoToRegister}/>}
        {view==='register' && <Register goToLogin={handleGoToLogin}  goToLanding={handleGoToLanding}/>}
        {view==='login' && <Login goToRegister={handleGoToRegister} goToLanding={handleGoToLanding} goToHome={handleGoToHome}/>}
        {view==='home' && <Home onLogOut={handleLogOut}/>}
      </SafeAreaView>
  );
}

