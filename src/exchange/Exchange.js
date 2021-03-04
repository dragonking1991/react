import React from 'react';
import './Exchange.css';

const currencytype = {
  v: 'vnd',
  u: 'usd'
}
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

class Exchange extends React.Component {
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

export default Exchange;
