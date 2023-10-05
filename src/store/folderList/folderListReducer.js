import { SELECT_ACTIVE_FOLDER } from './actionType'

const initialState = [
  { folderKey: '0-0', folderName: 'Важное', amountNotes: 2, nameSort: 'abc' },
  {
    folderKey: '0-1',
    folderName: 'Name',
    amountNotes: 1,
    childrenFolder: [{ folderKey: '0-1-0', folderName: 'Прог', amountNotes: 1 }, { folderKey: '0-1-1', folderName: 'Код', amountNotes: 0 }]
  }
]

export function folderListReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ACTIVE_FOLDER:
      return { ...state, value: action.payload }
    default:
      return state
  }
}
