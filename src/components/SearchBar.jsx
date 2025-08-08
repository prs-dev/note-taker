import { useStore } from "../store/notesStore"
import { useState } from "react"

const SearchBar = () => {
  const search = useStore(state => state.search)
  const searchTerm = useStore(state => state.searchTerm)
  // const [searchText, setSearchText] = useState('')

  console.log("test", search, searchTerm)
  return (
    <div className='py-2'>
      <input value={searchTerm} onChange={e => {
        search(e.target.value)
      }} className='w-full h-[50px] shadow-sm p-2' type="text" name="" id="" placeholder='&#128269;'/>
    </div>
  )
}

export default SearchBar