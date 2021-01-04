import React from 'react';
import './Exp.css';

// const Exp = () => {
//   const [valueInput, setValue] = useState('thanh')

  
//   handleChange = e => {
//     valueInput = e.target.value
//   }
//   return (
//     <div>
//       <input value={valueInput} onChange={() => { handlechange}} />
//       <p>
//         Hello {valueInput}!
//         </p>
//     </div>
//   )
// }

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
