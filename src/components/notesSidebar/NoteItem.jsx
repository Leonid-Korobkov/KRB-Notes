/* eslint-disable react/prop-types */
import { List, Card, Typography, Dropdown, Row, Col } from 'antd'
import { PushpinFilled, MoreOutlined, DeleteFilled, FolderFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/general/action'
import { useRef } from 'react'

const { Text, Paragraph, Title } = Typography

const items = [
  {
    key: 'pin',
    label: <Text>Закрепить</Text>,
    icon: <PushpinFilled />
  },
  {
    key: 'move',
    label: <Text>Переместить</Text>,
    icon: <FolderFilled />
  },
  {
    type: 'divider'
  },
  {
    key: 'delete',
    label: <Text>Удалить</Text>,
    danger: true,
    icon: <DeleteFilled />
  }
]
// { notes, onNoteClick, onDeleteNote, onMoveNote, onPinNote, folders }

const NoteItem = ({ note }) => {
  const dispatch = useDispatch()
  const activeNoteId = useSelector((state) => state.general.activeNoteId)
  const refDropdownDots = useRef(null)

  const { noteId, title, lastDateEdited } = note
  // const [activeNote, setActiveNote] = useState(notes[0]) // Устанавливаем первую заметку активной по умолчанию
  const handleNoteClick = (e, noteId) => {
    if (!(e.target.closest('.anticon-more') == refDropdownDots.current)) {
      dispatch(setActiveNote(noteId))
    }
    // setActiveNote(note) // Устанавливаем активную заметку при клике
    // onNoteClick(note.id)
  }

  const handleMenuClick = ({ key }) => {
    // console.log(key)
    // const noteId = activeNote.id
    // if (key === 'delete') {
    //   onDeleteNote(noteId)
    // } else if (key === 'move') {
    //   // Обработка перемещения заметки в другую папку
    // } else if (key === 'pin') {
    //   onPinNote(noteId)
    // }
  }

  return (
    <List.Item style={{ padding: 10 }}>
      <Card
        size="small"
        style={{ background: activeNoteId === noteId ? '#9254de' : '', width: '100%', border: 'none', cursor: 'pointer' }}
        onClick={(e) => handleNoteClick(e, noteId)}
      >
        <Row justify="space-between">
          <Col span={22}>
            <Title level={5} style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
              {title}
            </Title>
          </Col>
          <Col>
            <Dropdown
              menu={{
                items,
                onClick: handleMenuClick
              }}
              trigger={['click']}
            >
              <MoreOutlined ref={refDropdownDots} />
            </Dropdown>
          </Col>
        </Row>

        <Paragraph style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{note.content}</Paragraph>
        <Text type="secondary">{new Date(lastDateEdited).toLocaleString()}</Text>
      </Card>
    </List.Item>
  )
}

export default NoteItem
