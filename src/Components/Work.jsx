import React from 'react'
import WorkCard from './WorkCard'
import { WorkData } from './Workdata'

const Work = () => {
  return (
    <div>
      <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className="project-container">
           {/* <WorkCard  />  */}
           {
            WorkData.map((item,i)=>{
              return(
                <div key={i} >
                <WorkCard image={item.image} title={item.title} text={item.text} view={item.view} />
                </div>
              )
            })
           }

        </div>
    </div>
    </div>
  )
}

export default Work
