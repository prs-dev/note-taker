import {create} from 'zustand'

export const useStore = create(set => ({
    notes: [],
    addNotes: (note) => set(state => ({notes: [...state.notes, note]})),
    deleteNote: (note) => set(state => ({notes: state.notes.filter(item => item.id !== note.id)})),
    pinNote: (note) => set(state => ({notes: state.notes.map(item => item.id === note.id ? {
        ...note,
        pinned: true
    }:item)}))
}))

