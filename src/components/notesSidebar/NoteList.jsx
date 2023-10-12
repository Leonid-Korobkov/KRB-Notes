import { Empty, List } from 'antd'
import NoteItem from './NoteItem'
import { useSelector } from 'react-redux'
import { selectNotesForFolder } from '../../store/selectors'

// { notes, onNoteClick, onDeleteNote, onMoveNote, onPinNote, folders }

// eslint-disable-next-line react/prop-types
const NoteList = () => {
  const notes = useSelector(selectNotesForFolder)
  const orderedNotes = [...notes].sort((a, b) => b.lastDateEdited - a.lastDateEdited)
  return (
    <List
      locale={{
        emptyText: <Empty description={<span>Тут пусто</span>} />
      }}
      dataSource={orderedNotes}
      renderItem={(note) => <NoteItem note={note} />}
    />
  )
}

export default NoteList
