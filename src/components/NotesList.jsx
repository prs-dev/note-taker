import NotesCard from "./NotesCard"
import { useStore } from "../store/notesStore"
import {useDebounce} from '../hooks/useDebounce'

const NotesList = () => {
  const notes = useStore(state => state.notes)
  const searchTerm = useStore(state => state.searchTerm)
  const debounced = useDebounce(searchTerm, 500)
  console.log(notes)
  return (
    <div className="flex gap-10 items-center justify-center flex-wrap py-4">
      {notes.filter(i => i.content.includes(debounced) && i.pinned).map(item => <NotesCard note={item} />)}
      {notes.filter(i => i.content.includes(debounced) && !i.pinned).map(item => <NotesCard note={item} />)}
    </div>
  )
}

export default NotesList