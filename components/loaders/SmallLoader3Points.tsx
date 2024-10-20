import React from 'react'

function SmallLoader3Points() {
  return (
    <div className="flex flex-row gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-2 h-2 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  )
}

export default SmallLoader3Points