import { createSlice } from '@reduxjs/toolkit'

const initialState = { activeFolderKey: '0-0', activeNoteId: 1, darkMode: true }

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setActiveNote(state, action) {
      state.activeNoteId = action.payload
      // return { ...state, activeNoteId: action.payload }
    },
    setActiveFolder(state, action) {
      return { ...state, activeFolderKey: action.payload }
    },
    setStatusLoading(state, action) {
      return { ...state, statusLoading: action.payload }
    },
    setDarkMode(state, action) {
      return { ...state, darkMode: action.payload }
    }
  }
})



export const { setActiveNote, setActiveFolder, setStatusLoading, setDarkMode } = generalSlice.actions

export default generalSlice.reducer
