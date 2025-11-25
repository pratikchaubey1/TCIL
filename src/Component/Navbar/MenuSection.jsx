import React from 'react'
import { MdMenu } from 'react-icons/md'

function MenuSection() {
  return (
    <div>
         <button
        onClick={() => setIsOpen(true)}
        className="text-gray-700 transition-colors transition-transform duration-200 border-b-2 border-transparent  hover:scale-110 text-3xl"
        aria-label="Open menu"
      >
        <MdMenu />
      </button>
    </div>
  )
}

export default MenuSection