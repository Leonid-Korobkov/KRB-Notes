import { createSelector, createSlice } from '@reduxjs/toolkit'

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
    },
    editNoteContent(state, action) {
      const note = state.find(note => note.noteId === action.payload.id)
      note.content = action.payload.content
    }
  }
})

export const selectNotesForFolder = createSelector(
  state => state.notes,
  state => state.general,
  (notes, general) => {
    if (general.activeFolderKey == 'all') {
      return notes
    }
    return notes.filter(note => note.folderKey === general.activeFolderKey)
  }
)

export const selectActiveNote = createSelector(
  state => state.notes,
  state => state.general,
  (notes, general) => {
    return notes.find(note => note.noteId == general.activeNoteId)
  }
)

export const { editNoteTitle, editNoteContent } = notesListSlice.actions

export default notesListSlice.reducer