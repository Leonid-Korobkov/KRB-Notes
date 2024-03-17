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
import {Col, Input, Layout, Modal, Row, Typography} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {editNoteContent, editNoteTitle, recoverNote} from '../../store/notesList/notesListSlice'

import TextArea from 'antd/es/input/TextArea'
import {formatDate} from '../../utils/convertDate'
import {selectActiveNote} from '../../store/selectors'
import {useEffect, useState} from 'react'
import {useDebounce} from "../../hooks/useDebounce.js";

const {Content} = Layout
const {Text} = Typography

const NoteContent = () => {
  const note = useSelector(selectActiveNote)
  const [noteState, setNoteState] = useState(note)
  const activeFolderKey = useSelector((state) => state.general.activeFolderKey)

  const dispatch = useDispatch()

  const [modalErrorOpen, setModalErrorOpen] = useState(false)

  // Используем debounce только для пользовательского ввода
  const debouncedTitle = useDebounce(noteState.title, 500)
  const debouncedContent = useDebounce(noteState.content, 500)

  useEffect(() => {
    // Проверяем, отличается ли новое значение заголовка от предыдущего
    if (note && debouncedTitle !== note.title) {
      dispatch(editNoteTitle({content: noteState.title, id: noteId}))
    }
  }, [debouncedTitle])

  useEffect(() => {
    // Проверяем, отличается ли новое значение контента от предыдущего
    if (note && debouncedContent !== note.content) {
      dispatch(editNoteContent({content: noteState.content, id: noteId}))
    }
  }, [debouncedContent])

  useEffect(() => {
    if (note) {
      setNoteState(note)
    }
  }, [note]);

  if (!note) return
  const {title, content, lastDateEdited, noteId} = noteState

  function handleTitleChange(e) {
    if (activeFolderKey == 'deletedNotes') {
      setModalErrorOpen(true)
    } else {
      setNoteState({...noteState, title: e.target.value})
    }
  }

  function handleContentChange(e) {
    if (activeFolderKey == 'deletedNotes') {
      setModalErrorOpen(true)
    } else {
      setNoteState({...noteState, content: e.target.value})
    }
  }


  function confirmModal(note) {
    dispatch(recoverNote(note))
    setModalErrorOpen(false)
  }

  function cancelModal() {
    setModalErrorOpen(false)
  }

  return (
    <Content style={{overflow: 'auto', padding: '20px', maxWidth: 800, margin: '0px auto'}}>
      <Row justify="center" style={{width: '100%', height: '100%'}}>
        <Col span={24} style={{width: '100%', height: '100%'}}>
          <Modal
            title="Удаленную заметку нельзя редактировать"
            centered
            open={modalErrorOpen}
            onOk={() => confirmModal(note)}
            onCancel={cancelModal}
            okText={'Восстановить'}
            cancelText={'Отменить'}
          >
            <Text>Может вы хотите восстановить заметку?</Text>
          </Modal>
          <Text style={{display: 'block', marginBottom: 20, textAlign: 'center'}} type="secondary">
            {formatDate(lastDateEdited)}
          </Text>
          <Input style={{marginBottom: 20}} placeholder="Название заметки" value={title}
                 onChange={handleTitleChange}/>
          <TextArea autoSize value={content} onChange={handleContentChange}/>
        </Col>
      </Row>
    </Content>
  )
}

export default NoteContent
