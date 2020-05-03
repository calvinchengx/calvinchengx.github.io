import React from 'react'
import DocumentHeader from '../shared/DocumentHeader'
import NavHeader from '../shared/NavHeader'

function Layout({ components, properties }) {
  // deconstruct Content and Sidebar components
  const { Content, Sidebar } = components

  class LayoutHOC extends React.Component {
    constructor(props) {
      super(props)
    }

    renderSidebar() {
      if (!Sidebar) {
        return null
      }
      return <Sidebar />
    }

    renderContent() {
      if (!Content) {
        return null
      }
      return <Content {...this.props} />
    }

    render() {
      return (
        <>
          <DocumentHeader title={properties.title} />
          <div class="flex flex-col bg-gray-200">
            <div className="flex h-16 top-0 inset-x-0 bg-blue-600">
              <NavHeader />
            </div>
            <div className="flex h-full">
              <div className="w-1/5 bg-gray-400 h-full">
                {this.renderSidebar()}
              </div>
              <div className="w-4/5 bg-gray 500 h-full">
                {this.renderContent()}
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return LayoutHOC
}

export default Layout
