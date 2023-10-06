import { Empty, List } from 'antd'
import NoteItem from './NoteItem'
import { useSelector } from 'react-redux'

// const notes = [
//   {
//     id: 1,
//     title: 'Заметка 1. Это содержание заметки 1.',
//     content: 'Это содержание заметки 1. Здесь может быть много текста, и мы будем отображать первые 20 символов.',
//     lastDateEdited: Date.now() - 3600000 // Последнее редактирование было час назад
//   },
//   {
//     id: 2,
//     title: 'Заметка 2',
//     content: 'Это содержание заметки 2. Еще больше текста для примера.',
//     lastDateEdited: Date.now() - 7200000 // Последнее редактирование было 2 часа назад
//   },
//   {
//     id: 3,
//     title: 'Заметка 3',
//     content: 'Это содержание заметки 3. Еще больше текста для примера.',
//     lastDateEdited: Date.now() - 7200000 // Последнее редактирование было 2 часа назад
//   }
//   // Добавьте больше заметок по аналогии
// ]

// { notes, onNoteClick, onDeleteNote, onMoveNote, onPinNote, folders }

// eslint-disable-next-line react/prop-types
const NoteList = () => {
  // .filter(note => note.folderKey === '0-0')
  const notes = useSelector((state) => state.notes)
  return (
    <List
      locale={{
        emptyText: (
          <Empty
            description={
              <span>
                Тут пусто
              </span>
            }
          />
        )
      }}
      dataSource={notes}
      renderItem={(note) => <NoteItem note={note} />}
    />
  )
}

export default NoteList
