import React, { Component } from 'react'

class Resume extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className = 'container'>
        <h1>{this.props.values.name}</h1>
        <section className = 'contact'>
          <p>{this.props.values.portfolio}</p>
          <p>{this.props.values.email}</p>
          <p>{this.props.values.mobile}</p>
          <p>{this.props.values.location}</p>
        </section>
        <section className = 'profile'>
          <h2>Profile</h2>
          <p>{this.props.values.profile}</p>
        </section>
        <section className = 'work-experience'>
          <h3>Work</h3>
          {this.props.values.work.map((el) => 
            <div className = 'work'>
              <section className = 'work__info'>
                <div className = 'work__info-one'>
                  <h4>{el[0]}</h4>
                  <div>{el[1]}</div>
                </div>
                <div className = 'work__info-two'>
                  <div>{el[2]}</div>
                  <div>{el[3]}</div>
                </div>
              </section>
              <div className = 'work__description'>
                {el[4]}
              </div>
            </div>
          )}
        </section>
        <section className = 'education'>
          <h3>Education</h3>
          {this.props.values.education.map((el) => 
            <div className = 'education'>
              <section className = 'education__info'>
                <div className = 'education__info-one'>
                  <h4>{el[0]}</h4>
                  <div>{el[1]}</div>
                </div>
                <div className = 'education__info-two'>
                  <div>{el[2]}</div>
                  <div>{el[3]}</div>
                </div>
              </section>
              <div className = 'education__description'>
                {el[4]}
              </div>
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default Resume