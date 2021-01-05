import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import Exp from './exp/Exp';
import Mock from './mock/Mock';
import Router from './router/Router';
import * as serviceWorker from './serviceWorker';

const currencytype = {
  v: 'vnd',
  u: 'usd'
}

const DATAS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]

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
    const type = this.props.type;
    return (
      <fieldset>
        <legend onClick={this.clickHandle}>
          Enter currency in {currencytype[type]}:
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
    this.state = { type: 'v', currency: '' };
  }

  changeToUsd(currency) {
    this.setState({ type: 'u', currency });
  }
  changeToVnd(currency) {
    this.setState({ type: 'v', currency });
  }

  render() {
    const type = this.state.type;
    const currency = this.state.currency;

    const vnd = type === 'u' ? convertValue(currency, toVnd) : currency;
    const usd = type === 'v' ? convertValue(currency, toUsd) : currency;
    return (
      <div>
        <InputCurrency type='v' onInputChange={this.changeToVnd} currency={vnd} />
        <InputCurrency type='u' onInputChange={this.changeToUsd} currency={usd} />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    -----------------------------------------------------------------------------
    <Router />
    -----------------------------------------------------------------------------
    <Mock data={DATAS} />
    -----------------------------------------------------------------------------
    <Calculator />
    -----------------------------------------------------------------------------
    <App />
    -----------------------------------------------------------------------------
    <Exp />
    -----------------------------------------------------------------------------
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
