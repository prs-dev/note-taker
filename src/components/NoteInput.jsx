import { styles } from "../utils/styles"

const NoteInput = () => {
  return (
    <form action="" className='w-full flex flex-col items-center gap-2 py-10'>
      <textarea name="" id="" placeholder='Enter the note here' className='w-1/2 h-[200px] shadow-sm p-2'/>
      <div className='gap-10 flex items-center'>
        <button type="submit" className={styles.button}>Add Note</button>
        <button className={styles.button}>Summarize and add</button>
      </div>
    </form>
  )
}

export default NoteInput