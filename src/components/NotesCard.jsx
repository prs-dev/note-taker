import React from 'react'

const NotesCard = () => {
  return (
    <div className='h-[200px] w-[200px] bg-gray-200 shadow-md rounded-sm'>
      <div>
        {/* mardown preview */}
      </div>
      <div>
        {/* date */}
      </div>
      <div>
        {/* actions: pin, delete and summarize */}
        <button>&#128465;</button>
        <button>&#128204;</button>
        <button>...Summarise</button>
      </div>
    </div>
  )
}

export default NotesCard