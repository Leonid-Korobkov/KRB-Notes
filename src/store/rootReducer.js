import { combineReducers } from 'redux'
import { folderListReducer } from './folderList/folderListReducer'
import { notesListReducer } from './notesList/notesListReducer'
import { generalReducer } from './general/generalReducer'


export const rootReducer = combineReducers({
  folders: folderListReducer,
  notes: notesListReducer,
  general: generalReducer
})
