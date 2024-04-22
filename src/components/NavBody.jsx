import React from 'react'

const NavBody = ({title, icon}) => {
  return (
    <div>
           <div
            className="flex justify-between text-black hover:text-red-500 border-black border-b-[1px] px-3 py-2 text-base font-medium"
          >
            {title}
            {icon}
          </div>
      
    </div>
  )
}

export default NavBody

