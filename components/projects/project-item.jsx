import Link from "next/link"

function ProjectItem(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col p-5 transition-all bg-surface-200 hover:scale-110 brightness-75 hover:brightness-100 hover:z-10">
      <div className='text-surface-600 mb-4 flex flex-row items-center justify-between'>
        <div className='text-xs font-medium tracking-widest uppercase'>
          {props.lib}
        </div>
      </div>
      <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>
      <p className="w-full flex justify-end">&#8594;</p>
    </a>
  )
}

export default ProjectItem
