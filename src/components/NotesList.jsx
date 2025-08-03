import NotesCard from "./NotesCard"

const NotesList = () => {
  return (
    <div className="flex gap-10 items-center justify-center flex-wrap py-4">
      <NotesCard />
      <NotesCard />
    </div>
  )
}

export default NotesList