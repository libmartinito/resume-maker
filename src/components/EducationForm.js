import React, { Component } from 'react'

class Education extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <fieldset className = 'input-group'>
        <legend>Education</legend>
        <label htmlFor = 'institution' className = 'input-group__label'>Institution</label>
        <input
          type = 'text'
          id = 'institution'
          className = 'input-group__input'
          value = {this.props.value[0]}
          onChange = {e => {this.props.handler(this.props.index, 0, e)}}
        />
        <label htmlFor = 'institution' className = 'input-group__label'>Program</label>
        <input
          type = 'text'
          id = 'program'
          className = 'input-group__input'
          value = {this.props.value[1]}
          onChange = {e => {this.props.handler(this.props.index, 1, e)}}
        />
        <label htmlFor = 'completion-date' className = 'input-group__label'>Date of Completion</label>
        <input
          type = 'text'
          id = 'completion-date'
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
      </fieldset>
    )
  }
}

export default Education