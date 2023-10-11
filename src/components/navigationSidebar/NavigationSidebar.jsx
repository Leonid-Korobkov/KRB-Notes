import { Layout, Divider, Row, Col, Button, Typography } from 'antd'
import { DeleteFilled, FolderFilled } from '@ant-design/icons'

import Login from '../Login'

import FolderList from './FolderList'
import { useContext } from 'react'
import { SidebarCollapsedContext } from '../../context/SidebarCollapsedContext'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFolder } from '../../store/general/generalSlice'

const { Sider } = Layout

const { Text } = Typography

function NavigationSidebar() {
  const { isCollapsed } = useContext(SidebarCollapsedContext)
  const dispatch = useDispatch()
  const activeFolderKey = useSelector((state) => state.general.activeFolderKey)
  const notesLength = useSelector((state) => state.notes).length

  function handleAllNotesClick() {
    dispatch(setActiveFolder('all'))
  }

  function handleDeletedNotesClick() {
    dispatch(setActiveFolder('deletedNotes'))
  }

  return (
    <Sider style={{ overflow: 'auto' }} theme="light" width={200} trigger={null} collapsible collapsed={isCollapsed} collapsedWidth={0}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <Login />

          <Divider style={{ margin: '10px 0' }} />

          <Row justify="center">
            <Col span={22}>
              {/* type="primary"  */}
              <Button
                type={activeFolderKey === 'all' ? 'primary' : 'default'}
                block
                style={{ margin: '15px 0px' }}
                onClick={handleAllNotesClick}
                icon={<FolderFilled />}
              >
                Все заметки ({notesLength})
              </Button>

              <Row>
                <Text type="secondary" style={{ marginBottom: 5 }}>
                  Папки
                </Text>
              </Row>
              <FolderList />
            </Col>
          </Row>
        </div>

        <div>
          <Row justify="center">
            <Col span={22}>
              {activeFolderKey === 'deletedNotes' ? (
                <Button
                  danger
                  type={'primary'}
                  block
                  style={{ margin: '15px 0px' }}
                  icon={<DeleteFilled />}
                  onClick={handleDeletedNotesClick}
                >
                  Удаленные
                </Button>
              ) : (
                <Button
                  danger
                  type={'dashed'}
                  block
                  style={{ margin: '15px 0px', opacity: 0.4 }}
                  icon={<DeleteFilled />}
                  onClick={handleDeletedNotesClick}
                >
                  Удаленные
                </Button>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </Sider>
  )
}

export default NavigationSidebar
