import { Layout, Divider, Row, Col, Button, Typography } from 'antd'
import { DeleteFilled, FolderFilled } from '@ant-design/icons'

import Login from '../Login'

import FolderList from './FolderList'
import { useContext } from 'react'
import { SidebarCollapsedContext } from '../../context/SidebarCollapsedContext'

const { Sider } = Layout

const { Text } = Typography

function NavigationSidebar() {
  const { isCollapsed } = useContext(SidebarCollapsedContext)

  return (
    <Sider style={{ overflow: 'auto' }} theme="light" width={200} trigger={null} collapsible collapsed={isCollapsed} collapsedWidth={0}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <Login />

          <Divider style={{ margin: '10px 0' }} />

          <Row justify="center">
            <Col span={22}>
              <Button type="primary" block style={{ margin: '15px 0px' }} icon={<FolderFilled />}>
                Все заметки
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
              <Button block style={{ margin: '15px 0px', opacity: 0.4 }} icon={<DeleteFilled />}>
                Удаленные
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Sider>
  )
}

export default NavigationSidebar
