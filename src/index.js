import React from "react";
import ReactDom from 'react-dom/client';
import App from "./App";



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);







// import React, {useState, useEffect} from 'react';
// import ReactDom from 'react-dom/client';
// import LoggedIn from './components/LoggedIn';
// import NotLoggedIn from './components/NotLoggedIn';
// import ClickBtn from './components/ClickBtn';

// const App = () => {
  
//     const [loggedIn, setLoggedIn] = useState(true);
//     let [count, setCount] = useState(0)

//     const handleCount = () => {
//         setCount(count+=1)
//     }
//     const handleClick = () => {
//         setLoggedIn(!loggedIn)
//     };

//     useEffect(() => {
//         document.title = `You clicked Count ${count} times`
//     })


//     if(loggedIn){
//         return (<div>
//             <LoggedIn handleClick = {handleClick}/>
//             <ClickBtn handleCount = {handleCount}/>
//         </div>);
//     }else{
//         return (<div>
//             <NotLoggedIn handleClick = {handleClick}/>
//             <ClickBtn handleCount = {handleCount}/>
//         </div>);
//     }
// };
// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<App />);

