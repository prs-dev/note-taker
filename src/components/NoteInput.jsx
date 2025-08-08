import { styles } from "../utils/styles"
import { useState } from "react"
import { useStore } from "../store/notesStore"
import {aiSummary} from '../utils/summarizeNote'
const NoteInput = () => {
  const [text, setText] = useState('')
  const addNote = useStore(state => state.addNotes)
  const handleSubmit = e => {
    e.preventDefault()
    const newNote = {
      id: Math.random().toString(16).slice(2),
      content: text,
      date: new Date(),
      pinned: false
    }
    addNote(newNote)
  }
  const handleSummary = async() => {
    const res = await aiSummary(text)
    if(!res.ok) {
      return 
    }
    const data = await res.json()
    const content = data.choices[0].message.content
    // console.log(content)
    // console.log(content.choices[0].message.content)
    const newNote = {
      id: Math.random().toString(16).slice(2),
      content,
      date: new Date(),
      pinned: false
    }
    addNote(newNote)
  }

  return (
    <form onSubmit={handleSubmit} action="" className='w-full flex flex-col items-center gap-2 py-10'>
      <textarea name="" id="" placeholder='Enter the note here' className='w-1/2 h-[200px] shadow-sm p-2'value={text} onChange={e => setText(e.target.value)}/>
      <div className='gap-10 flex items-center'>
        <button type="submit" className={styles.button}>Add Note</button>
        <button type="button" onClick={handleSummary} className={styles.button}>Summarize and add</button>
      </div>
    </form>
  )
}

export default NoteInput