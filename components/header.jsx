import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
  return (
    <div className='lg:fixed lg:h-screen basis-1.5/4 flex flex-col justify-between pb-14 lg:pb-48 self-center lg:self-auto'>
      <div className=''>
        <h1 className='text-5xl subpixel-antialiased tracking-wide'>{props.data.name}</h1>
        <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>{props.data.headline}</h2>
        <Socials data={props.data.socials}></Socials>
      </div>
      <Navigation></Navigation>
    </div>
  )
}

export default Header
