// import { Layout, Space, theme } from 'antd'
// const { Sider, Content } = Layout
// import styles from './app.module'

// const contentStyle = {
//   textAlign: 'center',
//   minHeight: 120,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#108ee9'
// }
// const siderFoldersStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#3ba0e9'
// }
// const siderNotesStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#3ba0e9',
//   width: '500px'
// }

// function App() {
//   // const {
//   //   token: { colorBgContainer }
//   // } = theme.useToken()
//   return (
//     // <Space
//     //   direction="vertical"
//     //   style={{
//     //     width: '100%',
//     //     height: '100%',
//     //   }}
//     //   size={[0, 48]}
//     // >
//     <Layout
//       style={{
//         width: '100%',
//         height: '100%'
//       }}
//     >
//       <aside className={styles['aside__folders']}>

//       </aside>
//       <Layout>
//         <Content style={contentStyle}>Content</Content>
//       </Layout>
//     </Layout>
//     // </Space>
//   )
// }

// export default App
import { Layout, Menu, Tree, ConfigProvider, theme, Avatar, Divider, Row, Col, Button, Input, Tooltip, Typography } from 'antd'
import { FileOutlined, UserOutlined, DoubleRightOutlined, DoubleLeftOutlined, PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { DirectoryTree } = Tree

const { Sider, Content } = Layout
const { Search } = Input
const { Text } = Typography

const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      {
        title: 'leaf 0-0',
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

const onSearch = (value, _e, info) => console.log(info?.source, value)

const App = () => {
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info)
  }
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info)
  }
  const [collapsed, setCollapsed] = useState(false)

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}
    >
      <Layout style={{ height: '100%' }}>
        {/* Левая боковая панель с папками */}
        <Sider
          theme="light"
          style={{ background: '#1F1F1F' }}
          width={200}
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={0}
        >
          <Row align="middle" style={{ marginTop: 20, padding: 5 }}>
            <Col span={6}>
              <Avatar icon={<UserOutlined />} />
            </Col>
            <Col span={18}>
              <Text type="secondary">Леонид Коробков</Text>
            </Col>
          </Row>

          <Divider />
          <DirectoryTree multiple style={{ background: '#1F1F1F' }} onSelect={onSelect} onExpand={onExpand} treeData={treeData} />
        </Sider>

        {/* Правая боковая панель с заметками */}
        <Sider theme="light" style={{ background: '#282828' }} width={300}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'space-between', padding: 10 }}>
            <Button
              type="text"
              icon={collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
              onClick={() => setCollapsed(!collapsed)}
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
              <Button type="primary" shape="circle" icon={<PlusOutlined />} />
            </Tooltip>
          </div>
          <Menu theme="light" style={{ background: '#282828' }} mode="vertical">
            <Menu.Item key="4" icon={<FileOutlined />} title="Заметка 1">
              Заметка 1
            </Menu.Item>
            <Menu.Item key="5" icon={<FileOutlined />} title="Заметка 2">
              Заметка 2
            </Menu.Item>
            <Menu.Item key="6" icon={<FileOutlined />} title="Заметка 3">
              Заметка 3
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Область контента для открытой заметки */}
        <Content style={{ padding: '20px', background: '#323232', color: '#DFDFDF' }}>Здесь будет контент открытой заметки</Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
