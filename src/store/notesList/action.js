import { SELECT_ACTIVE_NOTE } from './actionType'

export function selectActiveNoteItem(noteId) {
  return {
    type: SELECT_ACTIVE_NOTE,
    payload: noteId
  }
}
