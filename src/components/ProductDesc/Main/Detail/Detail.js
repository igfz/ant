import React, { Component, PropTypes } from 'react'
import styles from './Detail.css'
import { Icon,Row,Col,Button } from 'antd'
import {Link } from 'react-router'

export default class Detail extends Component {

	render() {
		return (
			<dl>
				<dt>产品详情</dt>
				<dd>React Router is built In a nutshell, a history knows how to listen to the browsers address
				bar for changes and parses the URL into a `location` object that the
				router can use to match routes and render the correct set of components
				</dd>
				<dt>简介</dt>
				<dd>fdsafdsafasd</dd>
				<dt>231312</dt>
				<dd>fdsafdsafasd</dd>
				<dt>231312</dt>
				<dd>fdsafdsafasd</dd>
				<dt>231312</dt>
				<dd>fdsafdsafasd</dd>
			</dl>
		)
	}
}
