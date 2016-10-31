import React from 'react'
import { Row, Col,Button,Icon } from 'antd'
import Navigator from 'Navigator'
import Footer from 'Footer'

export default function App({ children }) {
  return (
    <div>

			<Navigator />

      <div>{children}</div>

			<Footer />

    </div>
  )
}
