import React, { useState, useReducer } from "react";
import './Hello.css';


const initState = {
  loading: false,
  data: [],
  error: null
}


const reducer = (state, action) => {
  switch (action) {
    case "TANG":
      return state + 1
    default:
      return state
  }
}

const reducer2 = (state, action) => {
  switch (action.type) {
    case "GAN_GIA_TRI":
      return action.data;
    default:
      return state
  }
}

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true
      }
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case "GET_USER_ERROR":
      return {
        ...state,
        data: [],
        error: action.data
      }
    default:
      return state
  }
}
const Hello = () => {
  const [valueInput, setState] = useState('thanh');
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  const [user, userDispatch] = useReducer(userReducer, initState);

  const getUsers = () => {
    userDispatch({
      type: 'GET_USER_REQUEST'
    });

    setTimeout(() => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => {
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: res
          });
        })
        .catch(err => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: err
          });
        })

    }, 2000)

  }

  return (
    <div>
      <button onClick={getUsers}> get user</button>
      {user.loading ? <p>loading...</p> : <p>{JSON.stringify(user)}</p>}

      <button onClick={() => dispatch('TANG')}>{count}Tang</button>

      <button onClick={() =>
        dispatch2({
          type: 'GAN_GIA_TRI',
          data: 10
        })
      }> {count2} Gan gia tri</button>

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
