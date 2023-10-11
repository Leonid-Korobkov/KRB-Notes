import { createSlice } from '@reduxjs/toolkit'
import { v4 as id } from 'uuid'
import { setActiveNote } from '../general/generalSlice'
import { selectNotesForFolder } from '../selectors'
import { addDeletedNote, moveDeletedNoteByKey, removeDeletedNote } from '../deletedNotesList/deletedNotesSlice'
import { setAmountNotesForFolder } from '../folderList/folderListSlice'

const initialState = [
  { noteId: 1, folderKey: '0-0', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now(), isPin: true },
  { noteId: 2, folderKey: '0-0', title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() },
  { noteId: 3, folderKey: '0-1', title: 'Заметка 3', content: 'Содержание заметки 3', lastDateEdited: Date.now() },
  { noteId: 4, folderKey: '0-1-0', title: 'Заметка 4', content: 'Содержание заметки 4', lastDateEdited: Date.now() }
]

const notesListSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    editNoteTitle(state, action) {
      const note = state.find(note => note.noteId === action.payload.id)
      note.title = action.payload.content
      note.lastDateEdited = Date.now()
    },
    editNoteContent(state, action) {
      const note = state.find(note => note.noteId === action.payload.id)
      note.content = action.payload.content
      note.lastDateEdited = Date.now()
    },
    createNewNote(state, action) {
      const { id, folderKey } = action.payload
      state.push({ noteId: id, folderKey: folderKey, title: '', content: '', lastDateEdited: Date.now() })
    },
    deleteNoteFromNotes(state, action) {
      const index = state.findIndex(note => note.noteId === action.payload.id)
      state.splice(index, 1)
    },
    addReadyNote(state, action) {
      state.push(action.payload)
    },
    moveNoteByKey(state, action) {
      const index = state.findIndex(note => note.noteId === action.payload.id)
      state[index].folderKey = action.payload.folderKey
    }
  }
})

export function recoverNote(note) {
  return dispatch => {
    dispatch(addReadyNote(note))
    dispatch(removeDeletedNote({ id: note.noteId }))
  }
}

export function moveNote(noteData) {
  return (dispatch, getState) => {
    const activeFolderKey = getState().general.activeFolderKey
    if (activeFolderKey == 'deletedNotes') {
      const deletedNotes = getState().deletedNotes
      const note = deletedNotes.find(note => note.noteId === noteData.id)
      const newNote = { ...note, folderKey: noteData.folderKey }
      dispatch(addReadyNote(newNote))
      dispatch(removeDeletedNote({ id: noteData.id }))
      dispatch(setActiveNote(null))
      dispatch(setAmountNotesForFolder({ folderKey: noteData.folderKey, delta: 1 }))
    } else {
      dispatch(moveNoteByKey(noteData))
      dispatch(setActiveNote(null))
      dispatch(setAmountNotesForFolder({ folderKey: activeFolderKey, delta: -1 }))
      dispatch(setAmountNotesForFolder({ folderKey: noteData.folderKey, delta: 1 }))
    }
  }
}

export function addNewNote() {
  return (dispatch, getState) => {
    const activeFolderKey = getState().general.activeFolderKey
    const newId = id()
    dispatch(createNewNote({ folderKey: activeFolderKey, id: newId }))
    dispatch(setActiveNote(newId))
    dispatch(setAmountNotesForFolder({ folderKey: activeFolderKey, delta: 1 }))
  }
}

export function removeNote({ id }) {
  return (dispatch, getState) => {
    const state = getState()
    const activeNoteId = state.general.activeNoteId
    const notesForFolder = selectNotesForFolder(state)
    const noteForDelete = notesForFolder.find(note => note.noteId === id)

    const index = state.notes.findIndex(note => note.noteId === id)

    if (activeNoteId === id) {
      const nonActiveNote = notesForFolder.find(note => note.noteId !== activeNoteId)
      if (nonActiveNote) {
        dispatch(setActiveNote(nonActiveNote.noteId))
      }
    }

    dispatch(addDeletedNote(noteForDelete))
    dispatch(deleteNoteFromNotes({ id: id }))
    dispatch(setAmountNotesForFolder({ folderKey: state.notes[index].folderKey, delta: -1 }))
  }
}

export const { editNoteTitle, editNoteContent, createNewNote, deleteNoteFromNotes, addReadyNote, moveNoteByKey } = notesListSlice.actions

export default notesListSlice.reducer
