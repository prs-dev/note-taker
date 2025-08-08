import Markdown from "react-markdown"
import { useStore } from "../store/notesStore"

const NotesCard = ({ note }) => {
  const deleteNote = useStore(state => state.deleteNote)
  const pinNote = useStore(state => state.pinNote)
  // console.log(note)
  return (
    <div className="h-[200px] max-w-[300px] p-2 bg-gray-200 shadow-md rounded-sm flex flex-col justify-between relative">
  
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
      {note?.content}
    </Markdown>
  </div>

  {/* Fixed button actions */}
  <div className="p-2 flex gap-2 items-center justify-between w-full">
    <button className="p-1 border shadow-sm rounded-sm border-red-400 hover:bg-red-500" onClick={() => pinNote(note)}>&#128204;</button>
    <button className="p-1 border shadow-sm rounded-sm border-gray-400 hover:bg-gray-400" onClick={() => deleteNote(note)}>&#128465;</button>
    <button className="px-1.5 py-0.8 border shadow-sm rounded-sm border-black hover:bg-black hover:text-white">...</button>
  </div>

</div>

  )
}


export default NotesCard