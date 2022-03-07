import React, { Component } from 'react'
import Education from './components/EducationForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      education: []
    }
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
        {this.displayEducationForm()}
        <button type = 'text' className = 'button' onClick = {this.addEducationChild}>Add Education</button>
      </div>
    )
  }
}

export default App;
