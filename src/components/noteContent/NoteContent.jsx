import { Layout, Row, Col, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { selectActiveNote } from '../../store/notesList/notesListSlice'
import Title from 'antd/es/typography/Title'

const { Content } = Layout
const { Text } = Typography

const NoteContent = () => {
  const note = useSelector(selectActiveNote)
  const { title, content } = note

  return (
    <Content style={{ overflow: 'auto', padding: '20px', maxWidth: 800, margin: '0px auto' }}>
      <Row justify="center">
        <Col span={24}>
          <Title>{title}</Title>
          <Text>{content}</Text>
        </Col>
      </Row>
    </Content>
  )
}

export default NoteContent
