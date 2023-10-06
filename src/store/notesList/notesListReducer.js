import { SELECT_ACTIVE_NOTE } from './actionType'

const initialState = [
  { noteId: 1, folderKey: '0-0', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now(), isPin: true },
  { noteId: 2, folderKey: '0-0', title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() },
  { noteId: 3, folderKey: '0-1', title: 'Заметка 3', content: 'Содержание заметки 3', lastDateEdited: Date.now() },
  { noteId: 4, folderKey: '0-1-0', title: 'Заметка 4', content: 'Содержание заметки 4', lastDateEdited: Date.now() }
]

export function notesListReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ACTIVE_NOTE:
      return { ...state, activeNoteId: action.payload }
    default:
      return state
  }
}
