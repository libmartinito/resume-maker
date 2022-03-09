import React, { Component } from 'react'
import Education from './components/EducationForm'
import Work from './components/WorkForm'
import Project from './components/ProjectForm'
import Form from './components/Form'
import Resume from './components/Resume'
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
      projects: [],
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

  addProjectChild = () => {
    this.setState({projects: this.state.projects.concat([Array(3).fill('')])})
  }

  handleProjectInputChange = (instanceIndex, valueIndex, e) => {
    let projects = this.state.projects
    let projectInstance = projects[instanceIndex]
    let value = e.target.value
    projectInstance[valueIndex] = value

    this.setState({projects: projects})
  }

  displayProjectForm = () => {
    return(this.state.projects.map((el, i) =>
      <Project
        key = {i}
        index = {i}
        value = {el}
        handler = {this.handleProjectInputChange}
      />
    ))
  }

  submitForm = (e) => {
    e.preventDefault()
    this.setState({isSubmitted: true})
  }

  editForm = (e) => {
    e.preventDefault()
    this.setState({isSubmitted: false})
  }

  render() {
    return(
      <div className='container'>
        {(this.state.isSubmitted) ? 
        <Resume 
          values = {this.state}
          edit = {this.editForm}  
        /> :
        <Form
          values = {this.state}
          handleGeneral = {this.handleGeneralInputChange}
          displayEducation = {this.displayEducationForm}
          displayWork = {this.displayWorkForm}
          displayProjects = {this.displayProjectForm}
          addEducation = {this.addEducationChild}
          addWork = {this.addWorkChild}
          addProject = {this.addProjectChild}
          submit = {this.submitForm}
        />
        }
      </div>
    )
  }
}

export default App;
