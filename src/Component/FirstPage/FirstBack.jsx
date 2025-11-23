import React from 'react'
import { useUser } from '../../Context/Context';
import { greetingAnimationClass } from './animation';

function FirstBack() {
  const { greetings, index } = useUser();

  return (
    <div className="bg-black">
      <div className="flex justify-center items-center h-screen">
        <h1
          className={`text-5xl font-serif text-white ${greetingAnimationClass}`}
        >
          {greetings[index]}
        </h1>
      </div>
    </div>
  )
}

export default FirstBack
