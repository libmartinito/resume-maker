import React, { Component } from 'react'
import Education from './components/EducationForm'
import General from './components/GeneralForm'
import Work from './components/WorkForm'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      location: '',
      email: '',
      mobile: '',
      portfolio: '',
      profile: '',
      education: [],
      work: [],
      isSubmitted: false
    }
  }

  handleGeneralInputChange = (e) => {
    let value = e.target.value
    let name = e.target.name
    this.setState({[name]: value})
  }

  addEducationChild = () => {
    this.setState({education: this.state.education.concat([Array(5).fill('')])})
  }

  handleEducationInputChange = (instanceIndex, valueIndex, e) => {
    let education = this.state.education
    let educationInstance = education[instanceIndex]
    let value = e.target.value
    educationInstance[valueIndex] = value

    this.setState({education: education})
  }

  displayEducationForm = () => {
    return(this.state.education.map((el, i) =>
      <Education
        key = {i}
        index = {i}
        value = {el}
        handler = {this.handleEducationInputChange}
      />
    ))
  }

  addWorkChild = () => {
    this.setState({work: this.state.work.concat([Array(5).fill('')])})
  }

  handleWorkInputChange = (instanceIndex, valueIndex, e) => {
    let work = this.state.work
    let workInstance = work[instanceIndex]
    let value = e.target.value
    workInstance[valueIndex] = value

    this.setState({work: work})
  }

  displayWorkForm = () => {
    return(this.state.work.map((el, i) =>
      <Work
        key = {i}
        index = {i}
        value = {el}
        handler = {this.handleWorkInputChange}
      />
    ))
  }

  render() {
    return(
      <div className ='container'>
        <General values = {this.state} handler = {this.handleGeneralInputChange} />
        <fieldset className = 'input-group'>
          <legend>Education</legend>
          {this.displayEducationForm()}
          <button type = 'button' className = 'button' onClick = {this.addEducationChild}>Add Education</button>
        </fieldset>
        <fieldset className = 'input-group'>
          <legend>Work</legend>
          {this.displayWorkForm()}
          <button type = 'button' className = 'button' onClick = {this.addWorkChild}>Add Work</button>
        </fieldset>
      </div>
    )
  }
}

export default App;
