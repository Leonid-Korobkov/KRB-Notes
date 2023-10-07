import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { folderKey: '0-0', folderName: 'Важное', amountNotes: 2, nameSort: 'abc' },
  {
    folderKey: '0-1',
    folderName: 'Name',
    amountNotes: 1,
    childrenFolder: [
      { folderKey: '0-1-0', folderName: 'Прог', amountNotes: 1 },
      { folderKey: '0-1-1', folderName: 'Код', amountNotes: 0 },
      { folderKey: '0-1-2', folderName: 'Код 2', amountNotes: 0 }
    ]
  }
]

const folderListSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    // selectActiveFolder(state, action) {
    //   state.activeFolderKey = action.payload
    // }
  }
})

// export const { selectActiveFolder } = folderListSlice.actions

export default folderListSlice.reducer
