import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()}
  }

  setDate() {
    this.setState({date:new Date()})
  }

  componentDidMount(){
    this.time = setInterval(() => {
      this.setDate()
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.time)
  }

  render(){
    return (
      <p>
        {this.state.date.toLocaleTimeString()}
      </p>
    )
  }
}

export default App;
