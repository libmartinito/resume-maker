import React, { Component } from 'react'

class General extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <fieldset className = 'input-group'>
        <legend>General</legend>
        <label htmlFor = 'name' className = 'input-group__label'>Name</label>
        <input
          type = 'text'
          id = 'name'
          name = 'name'
          className = 'input-group__input'
          value = {this.props.values.name}
          onChange = {e => {this.props.handler(e)}}
        />
        <label htmlFor = 'location' className = 'input-group__label'>Location</label>
        <input
          type = 'text'
          id = 'location'
          name = 'location'
          className = 'input-group__input'
          value = {this.props.values.location}
          onChange = {e => {this.props.handler(e)}}
        />
        <label htmlFor = 'email' className = 'input-group__label'>Email</label>
        <input
          type = 'email'
          id = 'email'
          name = 'email'
          className = 'input-group__input'
          value = {this.props.values.email}
          onChange = {e => {this.props.handler(e)}}
        />
        <label htmlFor = 'mobile' className = 'input-group__label'>Mobile</label>
        <input
          type = 'tel'
          id = 'mobile'
          name = 'mobile'
          className = 'input-group__input'
          value = {this.props.values.mobile}
          onChange = {e => {this.props.handler(e)}}
        />
        <label htmlFor = 'portfolio' className = 'input-group__label'>Portfolio</label>
        <input
          type = 'text'
          id = 'portfolio'
          name = 'portfolio'
          className = 'input-group__input'
          value = {this.props.values.portfolio}
          onChange = {e => {this.props.handler(e)}}
        />
        <label htmlFor = 'profile' className = 'input-group__label'>Profile</label>
        <textarea
          id = 'profile'
          name = 'profile'
          className = 'input-group__input'
          value = {this.props.values.profile}
          onChange = {e => {this.props.handler(e)}}
        />
      </fieldset>
    )
  }
}

export default General