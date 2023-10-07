import { Layout, ConfigProvider, theme, Divider, Row, Col, Typography } from 'antd'

import { useContext } from 'react'

import { AuthContext } from './context/AuthContext'

import Loader from './components/ui/Loader/Loader'
import NavigationSidebar from './components/navigationSidebar/NavigationSidebar'
import NotesSidebar from './components/notesSidebar/NotesSidebar'
import SidebarCollapsedProvider from './context/SidebarCollapsedProvider'
import NoteContent from './components/noteContent/NoteContent'

const { Content } = Layout
const { Text } = Typography

const App = () => {
  let { isLoading } = useContext(AuthContext)

  if (isLoading) return <Loader />

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}
    >
      <Layout style={{ height: '100%' }}>
        <SidebarCollapsedProvider>
          <NavigationSidebar />


          <Divider type="vertical" style={{ margin: 0, height: '100%' }} />
          <NotesSidebar />

          <NoteContent/>
        </SidebarCollapsedProvider>
      </Layout>
    </ConfigProvider>
  )
}

export default App
