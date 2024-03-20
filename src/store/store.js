import {combineReducers, configureStore} from '@reduxjs/toolkit'
import generalSlice from './general/generalSlice'
import folderListSlice from './folderList/folderListSlice'
import notesListSlice from './notesList/notesListSlice'
import deletedNotesSlice from './deletedNotesList/deletedNotesSlice'

import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'KRB-notes',
  storage,
  // Другие настройки по необходимости
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  folders: folderListSlice,
  notes: notesListSlice,
  general: generalSlice,
  deletedNotes: deletedNotesSlice
}));

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store

// const store = configureStore({
//   reducer: {
//     folders: folderListSlice,
//     notes: notesListSlice,
//     general: generalSlice,
//     deletedNotes: deletedNotesSlice
//   }
// })


