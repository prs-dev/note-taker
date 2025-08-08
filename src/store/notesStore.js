import {create} from 'zustand'

export const useStore = create(set => ({
    notes: [],
    searchTerm: '',
    addNotes: (note) => set(state => ({notes: [...state.notes, note]})),
    updateNote: note => set(state => ({notes: state.notes.map(i => i.id === note.id ? note : i)})),
    deleteNote: (note) => set(state => ({notes: state.notes.filter(item => item.id !== note.id)})),
    pinNote: (note) => set(state => ({notes: state.notes.map(item => item.id === note.id ? {
        ...note,
        pinned: true
    }:item)})),
    search: term => set(state => ({searchTerm: term}))
}))

