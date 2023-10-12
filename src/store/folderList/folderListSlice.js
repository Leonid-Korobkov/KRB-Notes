import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { folderKey: '0-0', folderName: 'Важное', amountNotes: 2, nameSort: 'abc' },
  {
    folderKey: '0-1',
    folderName: 'Учеба',
    amountNotes: 1,
    childrenFolder: [
      { folderKey: '0-1-0', folderName: 'Матан', amountNotes: 1 },
      { folderKey: '0-1-1', folderName: 'Ин.яз', amountNotes: 0 },
      { folderKey: '0-1-2', folderName: 'Физика', amountNotes: 0 }
    ]
  }
]

const folderListSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setAmountNotesForFolder(state, action) {
      const { folderKey, delta } = action.payload
      const folderToUpdate = findFolderByKey(state, folderKey)

      if (folderToUpdate) {
        folderToUpdate.amountNotes += delta
      }
    }
  }
})

export function findFolderByKey(folders, folderKey) {
  for (const folder of folders) {
    if (folder.folderKey === folderKey) {
      return folder
    }

    if (folder.childrenFolder) {
      const found = findFolderByKey(folder.childrenFolder, folderKey)
      if (found) {
        return found
      }
    }
  }

  return null
}

export const { setAmountNotesForFolder } = folderListSlice.actions

export default folderListSlice.reducer
