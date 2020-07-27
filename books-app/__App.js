import React,{useState,useEffect,Component}from 'react';
import {AsyncStorage,SafeAreaView} from 'react-native'
import styles from './styles';
import logic ,{logoutUser,isUserLoggedIn,isUserSessionValid} from 'books-client-logic'
// import {REACT_APP_API_URL} from './.env'

logic.__context__.API_URL = 'http://192.168.0.14:8080'
//logic.__context__.API_URL = 'http://localhost:8080'
logic.__context__.storage = AsyncStorage


import {Landing,Register,Login,Home,Spinner} from './src/components'



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {view:'landing',error:'',spinner:true}
  }


  // async componentDidMount() {
  //   // (async()=>{
  //     try{
  //       await isUserLoggedIn()
  //       await isUserSessionValid()
  //       this.setState({view:'home',spinner:false})
  //     }catch(error){
  //       this.setState({view:'login',spinner:false})
  //     }
  //   // })()
  // }

  handleGoToLanding = () =>this.setState({view:'landing'})
  handleGoToLogin = () =>this.setState({view:'login'})
  handleGoToRegister = () =>this.setState({view:'register'})
  handleGoToHome = () =>this.setState({view:'home'})


  
  handleLogOut= async() =>{
    try {
      await logoutUser()
      this.setState({view:'landing'})
    } catch (error) {
      this.setState({error:'landing'})
    }
  }


  render(){
    if(this.state.spinner) return <Spinner/>
    return (
      <SafeAreaView style={styles.container}>
        {this.state.view==='landing' && <Landing goToLogin={this.handleGoToLogin} goToRegister={this.handleGoToRegister}/>}
        {this.state.view==='register' && <Register goToLogin={this.handleGoToLogin}  goToLanding={this.handleGoToLanding}/>}
        {this.state.view==='login' && <Login goToRegister={this.handleGoToRegister} goToLanding={this.handleGoToLanding} goToHome={this.handleGoToHome}/>}
        {this.state.view==='home' && <Home onLogOut={this.handleLogOut}/>}
      </SafeAreaView>
    );
  } 
}
