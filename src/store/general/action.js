import { SET_ACTIVE_FOLDER, SET_ACTIVE_NOTE } from './actionType'

export function setActiveNote(noteId) {
  return {
    type: SET_ACTIVE_NOTE,
    payload: noteId
  }
}

export function setActiveFolder(folderKey) {
  return {
    type: SET_ACTIVE_FOLDER,
    payload: folderKey
  }
}
