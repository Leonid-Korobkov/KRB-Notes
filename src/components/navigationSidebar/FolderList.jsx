import { Tree, Dropdown, Typography, Button } from 'antd'
import { DeleteFilled, FolderFilled, DownOutlined, MoreOutlined, EditFilled } from '@ant-design/icons'
const { DirectoryTree } = Tree
const { Text } = Typography

import { useDispatch, useSelector } from 'react-redux'
import { setActiveFolder, setActiveNote } from '../../store/general/generalSlice'

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
    }
  }

  return (
    <DirectoryTree
      showLine
      switcherIcon={<DownOutlined />}
      onSelect={onSelect}
      treeData={folders}
      defaultSelectedKeys={[activeFolderKey]}
      // onRightClick={}
    />
  )
}

const FolderActionsMenu = () => {
  const handleMenuClick = (e) => {
    console.log('Clicked on menu item:', e.key)
  }

  return (
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
    key: 'pin',
    label: <Text>Переименовать</Text>,
    icon: <EditFilled />
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

export default FolderList
