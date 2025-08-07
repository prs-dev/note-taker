import NotesCard from "./NotesCard"
import { useStore } from "../store/notesStore"

const NotesList = () => {
  const notes = useStore(state => state.notes)
  console.log(notes)
  return (
    <div className="flex gap-10 items-center justify-center flex-wrap py-4">
      {
        notes.map(note => <NotesCard note={note}/>)
      }
    </div>
  )
}

export default NotesList