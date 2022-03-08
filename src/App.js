import React, { Component } from 'react'
import Education from './components/EducationForm'
import General from './components/GeneralForm'

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
      education: []
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
      <div key = {i}>
        <Education
          index = {i}
          value = {el}
          handler = {this.handleEducationInputChange}
        />
      </div>
    ))
  }
  render() {
    return(
      <div className ='container'>
        <General values = {this.state} handler = {this.handleGeneralInputChange} />
        {this.displayEducationForm()}
        <button type = 'text' className = 'button' onClick = {this.addEducationChild}>Add Education</button>
      </div>
    )
  }
}

export default App;
