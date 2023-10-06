import { SET_ACTIVE_FOLDER, SET_ACTIVE_NOTE, SET_STATUS_LOADING } from './actionType'

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

export function setStatusLoading(statusName) {
  return {
    type: SET_STATUS_LOADING,
    payload: statusName
  }
}
