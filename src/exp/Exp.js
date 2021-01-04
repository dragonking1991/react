import React from 'react';
import './Exp.css';


class Exp extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = { valueInput: ''}
  }

  handleChange(e){
    this.setState({ valueInput: e.target.value})
  }

  render(){
    return (
      <div>
        <input value={this.valueInput} onChange={this.handleChange} />
        <p>
          Hello {this.state.valueInput}!
        </p>
      </div>
    )
  }
}

export default Exp;
