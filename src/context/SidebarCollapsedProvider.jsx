import { useState } from 'react'
import { SidebarCollapsedContext } from './SidebarCollapsedContext'

// eslint-disable-next-line react/prop-types
function SidebarCollapsedProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return <SidebarCollapsedContext.Provider value={{ isCollapsed, setIsCollapsed }}>{children}</SidebarCollapsedContext.Provider>
}

export default SidebarCollapsedProvider
