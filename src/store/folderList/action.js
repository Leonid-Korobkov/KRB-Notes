import { SELECT_ACTIVE_FOLDER } from './actionType'

export function selectActiveFolder(folderKey) {
  return {
    type: SELECT_ACTIVE_FOLDER,
    payload: folderKey
  }
}
