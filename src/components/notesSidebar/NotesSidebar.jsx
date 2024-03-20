import {Button, Input, Layout, Tooltip} from 'antd'
import {DoubleLeftOutlined, DoubleRightOutlined, PlusOutlined} from '@ant-design/icons'

import NoteList from './NoteList'
import {SidebarCollapsedContext} from '../../context/SidebarCollapsedContext'

import {useContext, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addNewNote} from '../../store/notesList/notesListSlice'
import {setActiveFolder} from '../../store/general/generalSlice'

const {Sider} = Layout
const {Search} = Input

function NotesSidebar() {
  const activeFolderKey = useSelector((state) => state.general.activeFolderKey)
  const {isCollapsed, setIsCollapsed} = useContext(SidebarCollapsedContext)
  const [searchValue, setSearchValue] = useState('')

  const onSearch = (value) => {
    setSearchValue(value)
    dispatch(setActiveFolder('all'))
  }
  const dispatch = useDispatch()

  function handleNewNoteClick() {
    dispatch(addNewNote())
  }

  return (
    <Sider style={{overflow: 'auto'}} theme="light" width={300}>
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
          icon={isCollapsed ? <DoubleRightOutlined/> : <DoubleLeftOutlined/>}
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            fontSize: '16px',
            width: 32,
            height: 32
          }}
        />

        <Search
          placeholder="Поиск заметок"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200
          }}
        />

        <Tooltip title="Добавить заметку">
          <Button disabled={activeFolderKey == 'deletedNotes'} type="primary" shape="circle" icon={<PlusOutlined/>}
                  onClick={handleNewNoteClick}/>
        </Tooltip>
      </div>
      <NoteList searchValue={searchValue}></NoteList>
    </Sider>
  )
}

export default NotesSidebar
