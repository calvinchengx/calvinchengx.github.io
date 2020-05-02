import React from 'react'
import Header from '../shared/Header'

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
          <Header title={properties.title} />
          <div className="flex">
            <div className="w-1/5 bg-gray-400 h-full">
              {this.renderSidebar()}
            </div>
            <div className="w-4/5 bg-gray 500 h-full">
              {this.renderContent()}
            </div>
          </div>
        </>
      )
    }
  }

  return LayoutHOC
}

export default Layout
