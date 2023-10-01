const json = {
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
  notes: [
    { noteId: 1, folderKey: '0-0', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
    { noteId: 2, folderKey: '0-0', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
    { noteId: 3, folderKey: '0-1', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
    { noteId: 4, folderKey: '0-1-0', title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() }
  ]
}

export default class NotesService {
  static async getAll(json) {}
  static async getFolders(json) {}
  static async get() {}
}
