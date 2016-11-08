import React, { Component, PropTypes } from 'react'
import styles from './Sider.css'
import { Menu, Icon } from 'antd'
import {Link } from 'react-router'
const SubMenu = Menu.SubMenu

export default class Sider extends Component {

	constructor(props) {
    super(props)
    this.state = {
            current: '1',
      			openKeys: []
        };
    this.handleClick = this.handleClick.bind(this)
    this.onOpenChange = this.onOpenChange.bind(this)
		this.getKeyPath = this.getKeyPath.bind(this)
  }

  handleClick(e) {
    console.log('click ', e);
    this.setState({ current: e.key });
  }

  onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find(key => !(this.state.openKeys.indexOf(key) > -1));
    this.setState({ openKeys: this.getKeyPath(latestOpenKey) });
  }

  getKeyPath(key) {
    const map = {
      sub1: ['sub1'],
      sub2: ['sub2'],
      sub3: ['sub2', 'sub3'],
      sub4: ['sub4'],
    };
    return map[key] || [];
  }

	render() {

		return (
			<Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{ 'width': '100%' }}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
      >
        <SubMenu key="sub1" title={<span>Navigation One</span>}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span>Navigation Two</span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span>Navigation Three</span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
		)
	}
}
