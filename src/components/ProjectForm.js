import React, { Component } from 'react'

class Project extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className = 'input'>
        <label htmlFor = 'title' className = 'input-group__label'>Project Title</label>
        <input
          type = 'text'
          id = 'title'
          className = 'input-group__input'
          value = {this.props.value[0]}
          onChange = {e => {this.props.handler(this.props.index, 0, e)}}
        />
        <label htmlFor = 'link' className = 'input-group__label'>Live Preview</label>
        <input
          type = 'text'
          id = 'link'
          className = 'input-group__input'
          value = {this.props.value[1]}
          onChange = {e => {this.props.handler(this.props.index, 1, e)}}
        />
        <label htmlFor = 'description' className = 'input-group__label'>Description</label>
        <input
          type = 'text'
          id = 'description'
          className = 'input-group__input'
          value = {this.props.value[2]}
          onChange = {e => {this.props.handler(this.props.index, 2, e)}}
        />
      </div>
    )
  }
}

export default Project