import React from 'react';
import './Mock.css';

class FormCtrl extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
  }

  handleChangeInput(e) {
    this.props.onInputChange(e.target.value)
  }

  handleChangeCheckbox(e) {
    this.props.onCheckboxChange(e.target)
  }

  render() {
    return (
      <div>
        <input placeholder="Search..." onChange={this.handleChangeInput} />
        <input type="checkbox" id="showinstock" onChange={this.handleChangeCheckbox} />
        {' '}
        <label for="showinstock">Only show products in stock</label>
      </div>
    )
  }
}

class TitleList extends React.Component {
  render() {
    const category = this.props.category
    return (
      <tr>
        <td spancol='2'><b>{category}</b></td>
      </tr>
    )
  }
}

class ItemList extends React.Component {
  render() {
    const data = this.props.product
    const name = data.stocked ?
      data.name :
      <span style={{ color: 'red' }}>
        {data.name}
      </span>
    return (
      <tr>
        <td>{name}</td>
        <td>{data.price}</td>
      </tr>
    )
  }
}

class List extends React.Component {
  render() {
    const rowItems = []
    let lastCategory = null

    this.props.data.forEach(data => {
      if (data.category !== lastCategory) {
        rowItems.push(
          <TitleList
            category={data.category}
            key={data.category}
          />
        )
      }
      rowItems.push(
        <ItemList product={data} key={data.name} />
      )
      lastCategory = data.category
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rowItems}
        </tbody>
      </table>
    )
  }
}

class Mock extends React.Component {
  constructor(props) {
    super(props)
    this.filterText = this.filterText.bind(this)
    this.filterAvailable = this.filterAvailable.bind(this)
    this.filterData = []
    this.state = { dataFilter: this.props.data, available: false }
  }

  filterText(value) {
    this.filterData = []
    this.props.data.forEach(data => {
      if (data.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        if (this.state.available) {
          if (data.stocked) {
            this.filterData.push(data)
          }
        }
        else {
          this.filterData.push(data)
        }
      }
    })
    this.setState({ dataFilter: this.filterData })
  }

  filterAvailable(value) {
    this.filterData = []
    this.state.dataFilter.forEach(data => {
      if (value.checked) {
        console.log(1)
        if (data.stocked) {
          this.filterData.push(data)
        }
      }
      else {
        this.props.data.forEach(data => {
          if (data.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
            if (this.state.available) {
              if (data.stocked) {
                this.filterData.push(data)
              }
            }
            else {
              this.filterData.push(data)
            }
          }
        })
      }
    })
    console.log(value.checked, this.filterData)
    this.setState({ dataFilter: this.filterData, available: value.checked })
  }

  render() {
    return (
      <div>
        <FormCtrl onInputChange={this.filterText} onCheckboxChange={this.filterAvailable} />
        <List data={this.state.dataFilter} />
      </div>
    )
  }
}

export default Mock;
