import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './general/generalSlice'
import folderListSlice from './folderList/folderListSlice'
import notesListSlice from './notesList/notesListSlice'


const store = configureStore({
  reducer: {
    folders: folderListSlice,
    notes: notesListSlice,
    general: generalSlice
  }
})

export default store