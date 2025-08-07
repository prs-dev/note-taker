import Navbar from './components/Navbar'
import NoteInput from './components/NoteInput'
import NotesList from './components/NotesList'
import SearchBar from './components/SearchBar'
import NotesCard from './components/NotesCard'
// import { BearCounter, Controls } from './store/notesStore'
import { useStore } from './store/notesStore'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <main className='flex flex-col gap-4'>
        <SearchBar />
        <NoteInput />
        <NotesList />
      </main>
      <div>
        {/* {BearCounter()} */}
        {/* {Controls()} */}
      </div>
    </div>
  )
}

export default App