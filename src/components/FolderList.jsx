import { Tree, Dropdown, Typography } from 'antd'
import { DeleteFilled, FolderFilled, DownOutlined, MoreOutlined, EditFilled } from '@ant-design/icons'
const { DirectoryTree } = Tree
const { Text } = Typography

function FolderList() {
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info)
  }
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info)
  }

  return (
    <DirectoryTree
      showLine
      switcherIcon={<DownOutlined />}
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
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
      <MoreOutlined />
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

const treeData = [
  {
    title: (
      <CustomTreeNode title={`Заметки (${4})`}>
        <FolderActionsMenu style={{}} />
      </CustomTreeNode>
    ),
    key: '0-0',
    children: [
      {
        title: (
          <CustomTreeNode title="Важное">
            <FolderActionsMenu />
          </CustomTreeNode>
        ),
        key: '0-0-0'
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true
      }
    ]
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true
      }
    ]
  }
]

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
