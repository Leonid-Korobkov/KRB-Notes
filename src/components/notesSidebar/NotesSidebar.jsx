import { Layout, Button, Input, Tooltip } from 'antd'
import { DoubleRightOutlined, DoubleLeftOutlined, PlusOutlined } from '@ant-design/icons'

import NoteList from './NoteList'
import { SidebarCollapsedContext } from '../../context/SidebarCollapsedContext'

import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { addNewNote } from '../../store/notesList/notesListSlice'

const { Sider } = Layout
const { Search } = Input

function NotesSidebar() {
  const { isCollapsed, setIsCollapsed } = useContext(SidebarCollapsedContext)
  const onSearch = (value, _e, info) => console.log(info?.source, value)
  const dispatch = useDispatch()

  function handleNewNoteClick() {
    dispatch(addNewNote())
  }

  return (
    <Sider style={{ overflow: 'auto' }} theme="light" width={300}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          justifyContent: 'space-between',
          padding: '14px 10px',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
      >
        <Button
          type="text"
          icon={isCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            fontSize: '16px',
            width: 32,
            height: 32
          }}
        />

        <Search
          placeholder="Поиск"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200
          }}
        />

        <Tooltip title="Добавить заметку">
          <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={handleNewNoteClick} />
        </Tooltip>
      </div>
      <NoteList></NoteList>
    </Sider>
  )
}

export default NotesSidebar
