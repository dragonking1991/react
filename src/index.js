import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';


const currencyCategory = {
  v: 'vnd',
  u: 'usd'
};

function toVnd(input) {
  return input * 23000
}

function toUsd(input) {
  return input / 23000
}

function convertValue(currency, convertFunc) {
  const value = parseFloat(currency);
  if (Number.isNaN(value)) {
    return ''
  }
  const output = convertFunc(value);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString()
}

class InputCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(e) {
    e.target.parentNode.querySelector('input').focus()
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value)
  }

  render() {
    const currency = this.props.currency;
    const category = this.props.category;
    return (
      <fieldset>
        <legend onClick={this.clickHandle}>
          Enter currency in {currencyCategory[category]}:
        </legend>
        <input value={currency} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.changeToUsd = this.changeToUsd.bind(this);
    this.changeToVnd = this.changeToVnd.bind(this);
    this.state = { category: 'v', currency: '' };
  }

  changeToUsd(currency) {
    this.setState({ category: 'u', currency });
  }
  changeToVnd(currency) {
    this.setState({ category: 'v', currency });
  }

  render() {
    const category = this.state.category;
    const currency = this.state.currency;

    const vnd = category === 'u' ? convertValue(currency, toVnd) : currency;
    const usd = category === 'v' ? convertValue(currency, toUsd) : currency;
    return (
      <div>
        <InputCurrency category='v' onInputChange={this.changeToVnd} currency={vnd} />
        <InputCurrency category='u' onInputChange={this.changeToUsd} currency={usd} />
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Calculator />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
