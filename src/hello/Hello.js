import React, { useState } from "react";
import './Hello.css';

const Hello = () => {
  const [valueInput, setState] = useState('thanh')

  return (
    <div>
      <input value={valueInput} onChange={e => { setState(e.target.value) }} />
      <p>
        Hello {valueInput}!
        </p>
    </div>
  )
}

// class Hello extends React.Component {
//   constructor(props){
//     super(props);
//     this.handleChange = this.handleChange.bind(this)
//     this.state = { valueInput: ''}
//   }

//   handleChange(e){
//     this.setState({ valueInput: e.target.value})
//   }

//   render(){
//     return (
//       <div>
//         <input value={this.valueInput} onChange={this.handleChange} />
//         <p>
//           Hello {this.state.valueInput}!
//         </p>
//       </div>
//     )
//   }
// }

export default Hello;
