import Markdown from "react-markdown"
import { useStore } from "../store/notesStore"
import { useState } from "react"
import { styles } from "../utils/styles"
import {aiSummary} from '../utils/summarizeNote'

const NotesCard = ({ note }) => {
  const deleteNote = useStore(state => state.deleteNote)
  const pinNote = useStore(state => state.pinNote)
  const updateNote = useStore(state => state.updateNote)
  const [showSummary, setShowSummary] = useState(false)
  // console.log(note)
  const handleSummarize = async() => {
    const res = await aiSummary(note.content)
    if(!res.ok) return
    const data = await res.json()
    const content = data.choices[0].message.content
    const updatedNote = {
      ...note,
      summary: content
    }
    updateNote(updatedNote)
  }
  return (
    <div className="h-[200px] w-[200px] p-2 bg-gray-200 shadow-md rounded-sm flex flex-col justify-between relative">
  
  {note.pinned && <div className="text-xl absolute left-[0px] top-[-10px]">&#128204;</div>}

  {/* Scrollable content area */}
  <div className="w-full overflow-y-auto max-h-[120px] pr-1 mb-1">
    <Markdown
      components={{
        h1: ({ node, ...props }) => <h1 className="text-xl font-bold" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-lg font-semibold" {...props} />,
        p: ({ node, ...props }) => <p className="text-sm" {...props} />,
      }}
    >
      {showSummary && note.summary ? note?.summary : note.content}
    </Markdown>
  </div>

  {/* Fixed button actions */}
  <div className="p-2 flex gap-2 items-center justify-between w-full">
    <button className={`${styles.cardbtn} border-red-400 hover:bg-red-500`} onClick={() => pinNote(note)}>&#128204;</button>
    <button className={`${styles.cardbtn} border-gray-400 hover:bg-gray-400`} onClick={() => deleteNote(note)}>&#128465;</button>
    {!note.summary && <button onClick={handleSummarize} className={`${styles.cardbtn} px-2 border-black hover:bg-black hover:text-white`}>...</button>}
    {note.summary && <button className={`${styles.cardbtn}`} onClick={() => setShowSummary(prev => !prev)}>&#129523;</button>}
  </div>

</div>

  )
}


export default NotesCard