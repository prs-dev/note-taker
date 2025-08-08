import NotesCard from "./NotesCard"
import { useStore } from "../store/notesStore"

const NotesList = () => {
  const notes = useStore(state => state.notes)
  const searchTerm = useStore(state => state.searchTerm)
  console.log(notes)
  return (
    <div className="flex gap-10 items-center justify-center flex-wrap py-4">
      {notes.filter(i => i.content.includes(searchTerm)).map(item => <NotesCard note={item} />)}
    </div>
  )
}

export default NotesList