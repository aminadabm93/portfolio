import React, { Component } from 'react';
export default class Project extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="project">
        <h2>Recent Projects</h2>
        {
          resumeData.mainProjects.map(project => {
            return (
            <div className="row">
              <div className="six columns">
                <a href={project.url} target =""> 
                  <img className="project-pic"  src={project.imgurl}  alt="gif of project website" />
                </a>
              </div>
              <div className="six columns main-col">
                <a href={project.url} target =""><h2>{project.name}</h2></a>
                <p>
                { project.description}
                </p>
              </div>   
            </div>
            )
          })
        }
      </section>
    );
  }
}