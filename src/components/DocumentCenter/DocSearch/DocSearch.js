import React, { Component, PropTypes } from 'react'
import styles from './DocSearch.css'
import { Icon,Row,Col,Button,Pagination   } from 'antd'
import {Link } from 'react-router'
import SearchInput from '../SearchInput'

export default class DocSearch extends Component {

	render() {

		return (
			<div style={{'maxWidth':'1200px','minHeight':'1200px','margin':'3% auto'}}>
				<div className={styles.searchBox}>
					<div className={styles.subBox}>
						<SearchInput 
							placeholder="输入文档/代码、快速关键字检索..."
					    onSearch={value => console.log(value)}
					    style={{ width: 600 }}
					    size="large"
					    className={styles.search}/>
						<p>
							<span>云服务器</span><span>云数据库</span>
							<span>域名备案</span><span>CDN</span>
							<span>注册</span><span>购买</span>
							<span>密钥</span><span>SSH</span>
						</p>
					</div>
				</div>
				
				<ul className={styles.list}>
					<li>
						<h3>
							没有找到您要查询的内容，请直接拨打服务热线4009-100-100
						</h3>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
					<li>
						<h3><Link to="">Python SDK 常见问题和解答</Link></h3>
						<p>Objective-C SDK 安装指南 自动安装 通过 CocoaPods 安装可以最大化地简化安装过程。 首先，在项目根目录下的 Podfile 文件中添加以下</p>
					</li>
				</ul>

				<Pagination className={styles.page} showQuickJumper defaultCurrent={1} total={500} />

			</div>
		)
	}
}
