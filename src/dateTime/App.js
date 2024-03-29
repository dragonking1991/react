import React, { useState, useEffect } from 'react';
import './App.css';

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
