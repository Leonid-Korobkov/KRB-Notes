// import { Layout, Row, Col, Typography } from 'antd'
// import { useDispatch, useSelector } from 'react-redux'
// import { editNoteContent, editNoteTitle, selectActiveNote } from '../../store/notesList/notesListSlice'
// import Title from 'antd/es/typography/Title'
// import { useEffect, useState } from 'react'

// const { Content } = Layout
// const { Text } = Typography

// const NoteContent = () => {
//   const note = useSelector(selectActiveNote)
//   const dispatch = useDispatch()

//   const activeNoteId = useSelector((state) => state.general.activeNoteId)
//   const { title, content } = note

//   const [valueTitle, setValueTitle] = useState(title)
//   const [valueContent, setValueContent] = useState(content)

//   function handleTitleChange(e) {
//     dispatch(editNoteTitle({ content: e.target.textContent, id: note.noteId }))
//   }

//   function handleContentChange(e) {
//     dispatch(editNoteContent({ content: e.target.textContent, id: note.noteId }))
//   }

//   useEffect(() => {
//     setValueTitle(title)
//     setValueContent(content)
//   }, [activeNoteId])

//   return (
//     <Content style={{ overflow: 'auto', padding: '20px', maxWidth: 800, margin: '0px auto' }}>
//       <Row justify="center" style={{ width: '100%', height: '100%' }}>
//         <Col span={24} style={{ width: '100%', height: '100%' }}>
//           <Title onInput={handleTitleChange} contentEditable="true" suppressContentEditableWarning={true}>
//             {valueTitle}
//           </Title>
//           <Text
//             onInput={handleContentChange}
//             contentEditable="true"
//             suppressContentEditableWarning={true}
//             style={{ width: '100%', height: '100%', display: 'block' }}
//           >
//             {valueContent}
//           </Text>
//         </Col>
//       </Row>
//     </Content>
//   )
// }

// export default NoteContent
import { Layout, Row, Col, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { editNoteContent, editNoteTitle, selectActiveNote } from '../../store/notesList/notesListSlice'

import TextArea from 'antd/es/input/TextArea'

const { Content } = Layout

const NoteContent = () => {
  const note = useSelector(selectActiveNote)
  const dispatch = useDispatch()

  const { title, content } = note

  function handleTitleChange(e) {
    dispatch(editNoteTitle({ content: e.target.value, id: note.noteId }))
  }

  function handleContentChange(e) {
    dispatch(editNoteContent({ content: e.target.value, id: note.noteId }))
  }

  return (
    <Content style={{ overflow: 'auto', padding: '20px', maxWidth: 800, margin: '0px auto' }}>
      <Row justify="center" style={{ width: '100%', height: '100%' }}>
        <Col span={24} style={{ width: '100%', height: '100%' }}>
          <Input style={{ marginBottom: 20 }} placeholder="Название заметки" value={title} onChange={handleTitleChange} />
          <TextArea autoSize value={content} onChange={handleContentChange} />
        </Col>
      </Row>
    </Content>
  )
}

export default NoteContent
