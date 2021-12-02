import React, { useState, useEffect } from 'react';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbYfL94bhNQa8j_28Ldx55dvD_s2W4Mm8",
  authDomain: "rtest-bc78d.firebaseapp.com",
  projectId: "rtest-bc78d",
  storageBucket: "rtest-bc78d.appspot.com",
  messagingSenderId: "651772601976",
  appId: "1:651772601976:web:e7352a5a97ae83f4112f8d",
  measurementId: "G-9N5WSV53W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <p>
      {date.toLocaleTimeString()}
    </p>
  )
}

export default App;

// class App extends React.Component {
  //   constructor(props){
    //     super(props);
    //     this.state = {date:new Date()}
//   }

//   setDate() {
//     this.setState({date:new Date()})
//   }

//   componentDidMount(){
//     this.time = setInterval(() => {
//       this.setDate()
//     }, 1000)
//   }

//   componentWillUnmount(){
//     clearInterval(this.time)
//   }

//   render(){
//     return (
//       <p>
//         {this.state.date.toLocaleTimeString()}
//       </p>
//     )
//   }
// }
