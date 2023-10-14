import { Tree, Dropdown, Typography, Button, Modal } from 'antd'
import { DeleteFilled, FolderFilled, DownOutlined, MoreOutlined, EditFilled, FolderAddOutlined } from '@ant-design/icons'
const { DirectoryTree } = Tree
const { Text } = Typography

import { useDispatch, useSelector } from 'react-redux'
import { setActiveFolder, setActiveNote } from '../../store/general/generalSlice'
import { removeFolderAndNotes } from '../../store/folderList/folderListSlice'
import { useState } from 'react'

function FolderList() {
  const activeFolderKey = useSelector((state) => state.general.activeFolderKey)
  const notes = useSelector((state) => state.notes)
  let folders = useSelector((state) => state.folders)

  const dispatch = useDispatch()

  folders = changeFoldersStructure(folders)

  const onSelect = (keys) => {
    const key = keys[0]
    dispatch(setActiveFolder(key))

    const note = notes.find((note) => note.folderKey == key)
    if (note) {
      dispatch(setActiveNote(note.noteId))
    } else {
      dispatch(setActiveNote(null))
    }
  }

  return (
    <DirectoryTree
      showLine
      switcherIcon={<DownOutlined />}
      onSelect={onSelect}
      treeData={folders}
      selectedKeys={activeFolderKey !== 'all' && activeFolderKey !== 'deletedNotes' ? [activeFolderKey] : null}
      blockNode={true}
      // onRightClick={}
    />
  )
}

const FolderActionsMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    dispatch(removeFolderAndNotes({ folderKey: activeFolderKey }))
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const dispatch = useDispatch()
  const activeFolderKey = useSelector((state) => state.general.activeFolderKey)

  const handleMenuClick = ({ key }) => {
    if (key === 'rename') {
      // activeFolderKey == 'deletedNotes' ? dispatch(removeDeletedNote({ id: noteId })) : dispatch(removeNote({ id: noteId }))
    } else if (key === 'move') {
      // setIsModalOpen(true)
    } else if (key === 'newFolder') {
      // dispatch(recoverNote(note))
    } else if (key === 'delete') {
      showModal()
      // dispatch(recoverNote(note))
    }
    // else if (key === 'pin') {
    //   onPinNote(noteId)
    // }
  }

  return (
    <>
      <Modal title="Вы уверены, что хотите удалить папку?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Text>Все заметки и все вложенные папки будут также удалены.</Text>
      </Modal>
      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick
        }}
        trigger={['click']}
      >
        <Button type="text" size="small">
          <MoreOutlined />
        </Button>
      </Dropdown>
    </>
  )
}

// eslint-disable-next-line react/prop-types
const CustomTreeNode = ({ title, children }) => {
  return (
    <span>
      {/* style={{ display: 'inline-block', textOverflow: 'ellipsis', overflow: 'hidden', width: '110px', whiteSpace: 'nowrap' }} */}
      <Text>{title}</Text>
      {children}
    </span>
  )
}
const changeFoldersStructure = (folders) => {
  return folders.map((f) => {
    const children = f.childrenFolder ? changeFoldersStructure(f.childrenFolder) : null

    return {
      title: (
        <CustomTreeNode title={`${f.folderName} (${f.amountNotes})`}>
          <FolderActionsMenu />
        </CustomTreeNode>
      ),
      key: f.folderKey,
      children: children
    }
  })
}

const items = [
  {
    key: 'rename',
    label: <Text>Переименовать</Text>,
    icon: <EditFilled />
  },
  {
    key: 'move',
    label: <Text>Переместить</Text>,
    icon: <FolderFilled />
  },
  {
    key: 'newFolder',
    label: <Text>Новая папка</Text>,
    icon: <FolderAddOutlined />
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

export default FolderList
