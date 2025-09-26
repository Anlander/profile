import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
  return (
    <div className="group flex flex-row mb-4 py-2 lg:p-5 transition-all hover:bg-surface-200">
      <div className='basis-3/4'>
        <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.title} | {props.company} </a>
        <div className='mb-2 text-surface-600'>{props.startDate} - {props.endDate}</div>
        <div className='text-surface-600 mb-4'>{props.description}</div>
        <div className='grid grid-cols-3 gap-4 lg:gap-1 lg:flex lg:flex-row'>
          {props.skills ? props.skills.map(function(object, index) {
            return <div key={object} className='bg-surface-400 py-1 px-5 flex justify-center lg:px-3 rounded-full text-xs lg:mr-2'>{object}</div>
          }) : ""}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
