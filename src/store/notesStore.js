import {create} from 'zustand'

export const useStore = create(set => ({
    notes: [],
    addNotes: (note) => set(state => ({notes: [...state.notes, note]})),
    deleteNote: (note) => set(state => ({notes: state.notes.filter(item => item.id !== note.id)})),
    pinNote: (note) => set(state => ({notes: state.notes.map(item => item.id === note.id ? {
        ...note,
        pinned: true
    }:note)}))
}))



// const useStore = create(set => ({
//     bears: 0,
//     increasePopulation: () => set(state => ({bears: state.bears + 1})),
//     removeAllBears: () => set({bears: 0}),
//     updateBears: newBears  => set({bears: newBears})
// }))
