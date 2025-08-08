import Navbar from './components/Navbar'
import NoteInput from './components/NoteInput'
import NotesList from './components/NotesList'
import SearchBar from './components/SearchBar'

const App = () => {

  return (
    <div className=''>
      <Navbar />
      <main className='flex flex-col gap-4'>
        <SearchBar />
        <NoteInput />
        <NotesList />
      </main>
    </div>
  )
}

export default App