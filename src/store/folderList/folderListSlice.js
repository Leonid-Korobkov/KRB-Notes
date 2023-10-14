import { createSlice } from '@reduxjs/toolkit'
import { removeNote } from '../notesList/notesListSlice'

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
    },
    addNewFolder(state) {
      const lengthMainFolders = state.length
      state.push({ folderKey: `0-${lengthMainFolders}`, folderName: 'Без названия', amountNotes: 0 })
    },
    // addNewSubFolder(state, action) {
    //   const lengthMainFolders = state.length
    //   state.push({ folderKey: `0-${lengthMainFolders}`, folderName: 'Без названия', amountNotes: 0 })
    // },
    setNameFolder(state, action) {},
    deleteFolder(state, action) {
      const { folderKey } = action.payload // Получаем ключ папки для удаления

      // Функция для удаления папки из массива
      function removeFolder(folders, key) {
        return folders.filter(folder => folder.folderKey !== key)
      }

      // Рекурсивный поиск и удаление папки
      function deleteFolderRecursively(folders) {
        for (let i = 0; i < folders.length; i++) {
          if (folders[i].folderKey === folderKey) {
            // Найдена папка для удаления
            return removeFolder(folders, folderKey)
          }

          if (folders[i].childrenFolder) {
            const updatedChildren = deleteFolderRecursively(folders[i].childrenFolder)
            if (updatedChildren.length !== folders[i].childrenFolder.length) {
              // Если была удалена папка внутри childrenFolder, обновляем текущую папку
              folders[i] = { ...folders[i], childrenFolder: updatedChildren }
            }
          }
        }
        console.log('folders', folders)
        return folders
      }

      // Удаляем папку рекурсивно
      const updatedState = deleteFolderRecursively(state)

      return updatedState
    },
    moveFolder(state, action) {}
  }
})

// Добавьте эту функцию в ваш slice
export function deleteNotesInFolderAndSubfolders(folder, dispatch, getState) {
  // console.log(folder)
  const { folderKey  } = folder
  const childrenFolder = findFolderByKey(getState().folders, folderKey).childrenFolder
  // console.log(folder, childrenFolder)

  // Найдите и удалите заметки с folderKey
  const notes = getState().notes.filter(note => note.folderKey === folderKey)
  for (const note of notes) {
    // console.log(note)
    dispatch(removeNote({ id: note.noteId }))
  }

  // Рекурсивно удалите заметки в подпапках
  if (childrenFolder) {
    for (const subfolder of childrenFolder) {
      deleteNotesInFolderAndSubfolders(subfolder, dispatch, getState)
    }
  }
}

// В вашей функции removeFolderAndNotes
export function removeFolderAndNotes(action) {
  return (dispatch, getState) => {
    // Удалите заметки в текущей папке и ее подпапках
    deleteNotesInFolderAndSubfolders(action, dispatch, getState)

    // Затем удалите папку
    dispatch(deleteFolder(action))
  }
}

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

export const { setAmountNotesForFolder, addNewFolder, deleteFolder } = folderListSlice.actions

export default folderListSlice.reducer
