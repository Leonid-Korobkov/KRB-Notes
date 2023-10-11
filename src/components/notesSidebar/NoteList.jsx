import { Empty, List } from 'antd'
import NoteItem from './NoteItem'
import { useSelector } from 'react-redux'
import { selectNotesForFolder } from '../../store/selectors'


// { notes, onNoteClick, onDeleteNote, onMoveNote, onPinNote, folders }

// eslint-disable-next-line react/prop-types
const NoteList = () => {
  // .filter(note => note.folderKey === '0-0')
  const notes = useSelector(selectNotesForFolder)
  // const activeFolderKey = useSelector((state) => state.general.activeFolderKey)
  // const notes = useSelector((state) => state.notes.filter(note => note.folderKey === activeFolderKey))
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
