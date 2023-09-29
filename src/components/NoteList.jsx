import { useState } from 'react'
import { List, Card, Typography, Dropdown, Row, Col } from 'antd'
import { PushpinFilled, MoreOutlined, DeleteFilled, FolderFilled } from '@ant-design/icons'

const { Text, Paragraph, Title } = Typography

const itemsActionsDropMenu = [
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

// eslint-disable-next-line react/prop-types
// { notes, onNoteClick, onDeleteNote, onMoveNote, onPinNote, folders }
const NoteList = ({ notes, onNoteClick}) => {
  const [activeNote, setActiveNote] = useState(notes[0]) // Устанавливаем первую заметку активной по умолчанию

  const handleNoteClick = (note) => {
    setActiveNote(note) // Устанавливаем активную заметку при клике
    onNoteClick(note.id)
  }

  const handleMenuClick = ({ key }) => {
    console.log(key)
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
    <List
      dataSource={notes}
      renderItem={(note) => (
        <List.Item style={{ padding: 10 }}>
          <Card
            size="small"
            style={{ background: activeNote.id === note.id ? '#9254de' : '', maxWidth: '100%', border: 'none', cursor: 'pointer' }}
            onClick={() => handleNoteClick(note)}
          >
            <Row justify="space-between">
              <Col span={22}>
                <Title level={5} style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
                  {note.title}
                </Title>
              </Col>
              <Col>
                <Dropdown
                  menu={{
                    itemsActionsDropMenu,
                    onClick: handleMenuClick
                  }}
                  trigger={['click']}
                >
                  <MoreOutlined />
                </Dropdown>
              </Col>
            </Row>

            <Paragraph style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{note.content}</Paragraph>
            <Text type="secondary">{new Date(note.lastDateEdited).toLocaleString()}</Text>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default NoteList
