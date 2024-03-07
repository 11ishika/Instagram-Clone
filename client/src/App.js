import react,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/Navbar'
import './App.css'
import {BrowserRouter, Route, Routes,useNavigate} from 'react-router-dom'
// import {BrowserRouter,Route} from 'react-router'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Profile from './components/screens/Profile'
// import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext=createContext()


const Routing=()=>{
  const navigate=useNavigate() 
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      // navigate('/')
    }else{
      navigate('/signin')
    }
  },[])
  return(
    
    <Routes>
    <Route
        exact
        path="/"
        element={<Home />}
    ></Route>
    <Route
        
        path="/signin"
        element={<Signin />}
    ></Route>
    <Route
        
        path="/profile"
        element={<Profile />}
    ></Route>
    <Route
        
        path="/signup"
        element={<Signup />}
    ></Route>
    <Route
        
        path="/create"
        element={<CreatePost />}
    ></Route>
    </Routes>
    
  )
}
function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    
      <NavBar/>
      <Routing/>
      
      
      

    </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
