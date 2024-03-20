import {createSlice} from '@reduxjs/toolkit'

const initialState = {activeFolderKey: null, activeNoteId: null, darkMode: true}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setActiveNote(state, action) {
      state.activeNoteId = action.payload
    },
    setActiveFolder(state, action) {
      state.activeFolderKey = action.payload
    },
    setStatusLoading(state, action) {
      state.statusLoading = action.payload
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload
    }
  }
})

export const {setActiveNote, setActiveFolder, setStatusLoading, setDarkMode} = generalSlice.actions

export default generalSlice.reducer
