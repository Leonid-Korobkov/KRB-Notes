const json = {
  activeFolderKey: '0-1',
  folders: [
    { folderKey: '0-0', folderName: 'Важное', amountNotes: 2, nameSort: 'abc' },
    {
      folderKey: '0-1',
      folderName: 'Name',
      amountNotes: 1,
      childrenFolder: [
        { folderKey: '0-1-0', folderName: 'Прог', amountNotes: 1 },
        { folderKey: '0-1-1', folderName: 'Код', amountNotes: 0 }
      ]
    }
  ],
  activeNoteId: 2,
  notes: [
    { noteId: 1, folderKey: '0-0', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now(), isPin: true },
    { noteId: 2, folderKey: '0-0', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
    { noteId: 3, folderKey: '0-1', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
    { noteId: 4, folderKey: '0-1-0', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() }
  ],
  // notesContent: [
  //   { noteId: 5, content: [
  //     {typeBlock: 'text', ...}
  //   ]}
  // ]
}


export default class FirebaseService {
  static async getAllUserData(userId) {}
  static async getFolderList(userId) {}
  static async getNoteList(userId) {}
}