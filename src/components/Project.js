import React, { Component } from 'react';
export default class Project extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="project">
         <div className="row">

            <div className="six columns">
               <a href={resumeData.mainProjects[0].url} target =""> 
                    <img className="project-pic"  src={resumeData.mainProjects[0].imgurl}  alt="" />
               </a>
            </div>

            <div className="six columns main-col">

            <a href={resumeData.mainProjects[0].url} target =""><h2>{resumeData.mainProjects[0].name}</h2></a>
               <p>
               {
                 resumeData.mainProjects[0].description
               }
               </p>

            </div>
         </div>
      </section>
    );
  }
}