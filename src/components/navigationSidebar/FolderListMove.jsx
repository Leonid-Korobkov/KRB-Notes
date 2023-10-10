import { Tree, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { DirectoryTree } = Tree
const { Text } = Typography

import { useSelector } from 'react-redux'

// eslint-disable-next-line react/prop-types
function FolderListMove({ onSelect }) {
  let folders = useSelector((state) => state.folders)
  folders = changeFoldersStructure(folders)

  return <DirectoryTree showLine defaultExpandAll switcherIcon={<DownOutlined />} onSelect={onSelect} treeData={folders} />
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
