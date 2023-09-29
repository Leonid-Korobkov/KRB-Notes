const json = [
  {
    folderName: 'Программирование',
    amountNotes: 12,
    notes: [
      { id: 1, title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
      { id: 2, title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() },
      {
        folderName: 'Важное',
        notes: [
          { id: 3, title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
          { id: 4, title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() },
          {
            folderName: 'Новое',
            notes: [
              { id: 5, title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
              { id: 6, title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() }
            ]
          }
        ]
      },
      { id: 7, title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
      { id: 8, title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() }
    ]
  },
  {
    folderName: 'Программирование 2',
    notes: [
      { id: 9, title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
      { id: 10, title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() },
      {
        folderName: 'Важное',
        notes: [
          { id: 11, title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
          { id: 4, title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() },
          {
            folderName: 'Новое',
            notes: [
              { id: 12, title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
              { id: 13, title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() }
            ]
          }
        ]
      },
      { id: 14, title: 'Заметка 1', content: 'Содержание заметки 1', lastDateEdited: Date.now() },
      { id: 25, title: 'Заметка 2', content: 'Содержание заметки 2', lastDateEdited: Date.now() }
    ]
  }
]

export default class NotesService {
  static async getAll(json) {}
  static async getFolders(json) {}
  static async get() {}
}
