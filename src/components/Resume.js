import React, { Component } from 'react'
import '../styles/Resume.css'

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let portfolio = this.props.values.portfolio
    return(
      <section className = 'contact'>
        <h1>{this.props.values.name}</h1>
        <div className = 'contact__mobile-location'>
          <p>{this.props.values.mobile}</p>
          <p>{this.props.values.location}</p>
        </div>
        <div className = 'contact__portfolio-email'>
          <a href= {portfolio}>{portfolio}</a>
          <p>{this.props.values.email}</p>
        </div>
      </section>
    )
  }
}

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className = 'profile'>
        <h2>Profile</h2>
        <p>{this.props.values.profile}</p>
      </section>
    )
  }
}

class Work extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className = 'work'>
        <h2>Work</h2>
        {this.props.values.work.map(el =>
          <div className = 'work__item'>
            <div className = 'work__header'>
              <div className = 'work__employer-title'>
                <p className = 'work__employer'>{el[0]}</p>
                <p className = 'work__title'>{el[1]}</p>
              </div>
              <div className = 'work__period-location'>
                <p className = 'work__period'>{el[2]}</p>
                <p className = 'work__location'>{el[3]}</p>
              </div>
            </div>
            <div className = 'work__body'>
              <p>{el[4]}</p>
            </div>
          </div>  
        )}
      </section>
    )
  }
}

class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className = 'projects'>
        <h2>Projects</h2>
        {this.props.values.projects.map(el =>
          <div className = 'project__item'>
            <div className = 'project__header'>
              <p>{el[0]}</p>
              <a href={el[1]}>{el[1]}</a>
            </div>
            <div className = 'project__body'>
              <p>{el[2]}</p>
            </div>
          </div>
        )}
      </section>
    )
  }
}

class Education extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className = 'education'>
        <h2>Education</h2>
        {this.props.values.education.map(el =>
          <div className = 'education__item'>
            <div className = 'education__header'>
              <div className = 'education__institution-program'>
                <p className = 'education__institution'>{el[0]}</p>
                <p className = 'education__program'>{el[1]}</p>
              </div>
              <div className = 'education__period-location'>
                <p className = 'education__period'>{el[2]}</p>
                <p className = 'education__location'>{el[3]}</p>
              </div>
            </div>
            <div className = 'education__body'>
              <p>{el[4]}</p>
            </div>
          </div>  
        )}
      </section>
    )
  }
}

class Resume extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className = 'container__resume'>
        <Contact values = {this.props.values}/>
        <Profile values = {this.props.values}/>
        <Projects values = {this.props.values}/>
        <Education values = {this.props.values}/>
        <Work values = {this.props.values}/>
        <button type = 'button' className = 'button' onClick = {this.props.edit}>Edit</button>
      </div>
    )
  }
}

export default Resume