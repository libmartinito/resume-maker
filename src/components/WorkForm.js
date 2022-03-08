import React, { Component } from 'react'

class Work extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className = 'input'>
        <label htmlFor = 'employer' className = 'input-group__label'>Employer</label>
        <input
          type = 'text'
          id = 'employer'
          className = 'input-group__input'
          value = {this.props.value[0]}
          onChange = {e => {this.props.handler(this.props.index, 0, e)}}
        />
        <label htmlFor = 'title' className = 'input-group__label'>Title</label>
        <input
          type = 'text'
          id = 'title'
          className = 'input-group__input'
          value = {this.props.value[1]}
          onChange = {e => {this.props.handler(this.props.index, 1, e)}}
        />
        <label htmlFor = 'period' className = 'input-group__label'>Period</label>
        <input
          type = 'text'
          id = 'period'
          className = 'input-group__input'
          value = {this.props.value[2]}
          onChange = {e => {this.props.handler(this.props.index, 2, e)}}
        />
        <label htmlFor = 'location' className = 'input-group__label'>Location</label>
        <input
          type = 'text'
          id = 'location'
          className = 'input-group__input'
          value = {this.props.value[3]}
          onChange = {e => {this.props.handler(this.props.index, 3, e)}}
        />
        <label htmlFor = 'description' className = 'input-group__label'>Description</label>
        <textarea
          type = 'text'
          id = 'description'
          className = 'input-group__input'
          value = {this.props.value[4]}
          onChange = {e => {this.props.handler(this.props.index, 4, e)}}
        />
      </div>
    )
  }
}

export default Work