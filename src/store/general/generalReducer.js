import { SET_ACTIVE_FOLDER, SET_ACTIVE_NOTE } from './actionType'

const initialState = { activeFolderKey: '0-0', activeNoteId: 1 }

export function generalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_NOTE:
      return { ...state, activeNoteId: action.payload }
    case SET_ACTIVE_FOLDER:
      return { ...state, value: action.payload }
    default:
      return state
  }
}
