import { SET_ACTIVE_FOLDER, SET_ACTIVE_NOTE, SET_STATUS_LOADING } from './actionType'

const initialState = { activeFolderKey: '0-0', activeNoteId: 1 }

export function generalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_NOTE:
      return { ...state, activeNoteId: action.payload }
    case SET_ACTIVE_FOLDER:
      return { ...state, value: action.payload }
    case SET_STATUS_LOADING:
      return { ...state, statusLoading: action.payload }
    default:
      return state
  }
}
