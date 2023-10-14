import { Button, Tree, Typography } from 'antd'
import { DownOutlined, FolderFilled } from '@ant-design/icons'

const { DirectoryTree } = Tree
const { Text } = Typography

import { useSelector } from 'react-redux'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function FolderListMove({ onSelect }) {
  let folders = useSelector((state) => state.folders)
  folders = changeFoldersStructure(folders)
  const notesLength = useSelector((state) => state.notes).length
  const [isActiveBtnAll, setIsActiveBtnAll] = useState(true)
  const [selectedFolderKey, setSelectedFolderKey] = useState('')

  function handleAllNotesClick() {
    setIsActiveBtnAll(true)
    onSelect('all')
  }

  function onSelectFolder(key) {
    setSelectedFolderKey(key)
    onSelect(key)
    setIsActiveBtnAll(false)
  }

  return (
    <>
      <Button
        type={isActiveBtnAll ? 'primary' : 'default'}
        block
        style={{ margin: '15px 0px' }}
        onClick={handleAllNotesClick}
        icon={<FolderFilled />}
      >
        Все заметки ({notesLength})
      </Button>{' '}
      <DirectoryTree showLine defaultExpandAll switcherIcon={<DownOutlined />} onSelect={onSelectFolder} treeData={folders} selectedKeys={isActiveBtnAll ? null : selectedFolderKey} />
    </>
  )
}

// eslint-disable-next-line react/prop-types
const CustomTreeNode = ({ title, children }) => {
  return (
    <span>
      <Text>{title}</Text>
      {children}
    </span>
  )
}
const changeFoldersStructure = (folders) => {
  return folders.map((f) => {
    const children = f.childrenFolder ? changeFoldersStructure(f.childrenFolder) : null

    return {
      title: <CustomTreeNode title={`${f.folderName} (${f.amountNotes})`}></CustomTreeNode>,
      key: f.folderKey,
      children: children
    }
  })
}

export default FolderListMove
