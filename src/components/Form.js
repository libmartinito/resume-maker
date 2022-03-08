import React, { Component } from 'react'
import General from './GeneralForm'

class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <form class = 'container'>
        <General values = {this.props.values} handler = {this.props.handleGeneral} />
        <fieldset className = 'input-group'>
          <legend>Projects</legend>
          {this.props.displayProjects()}
          <button type = 'button' className = 'button' onClick = {this.props.addProject}>Add Project</button>
        </fieldset>
        <fieldset className = 'input-group'>
          <legend>Education</legend>
          {this.props.displayEducation()}
          <button type = 'button' className = 'button' onClick = {this.props.addEducation}>Add Education</button>
        </fieldset>
        <fieldset className = 'input-group'>
          <legend>Work</legend>
          {this.props.displayWork()}
          <button type = 'button' className = 'button' onClick = {this.props.addWork}>Add Work</button>
        </fieldset>
        <button type = 'button' className = 'button' onClick = {this.props.submit}>Submit</button>
      </form>
    )
  }
}

export default Form
