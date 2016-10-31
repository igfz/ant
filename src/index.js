import 'babel-polyfill'//浏览器填缝工具
import React from 'react'
import ReactDOM from 'react-dom' //14版本以后，reactDom已从React中分离
import { Provider } from 'react-redux' //Provider将redux数据结构与react绑定
import GameDetail from 'GameDetail'
import App from 'App'
import Index from 'Index'
import ProductDesc from 'ProductDesc'

import Demo from 'ProductDesc/Main/Demo'
import Detail from 'ProductDesc/Main/Detail'
import Doc from 'ProductDesc/Main/Doc'
import Sdk from 'ProductDesc/Main/Sdk'

import configureStore from './store/configureStore'

import {
	Router,
	Route,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router'

import {syncHistoryWithStore} from 'react-router-redux'

console.log('start')

const store = configureStore() //{catalog:_catalog}//配置仓库，传入的同构数据如果使用combineReducers处理，则必须是带同样key的普通对象
const history = syncHistoryWithStore(hashHistory, store)

const rootEl = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}/>
			<Route path="/product" component={ProductDesc}>
				<IndexRoute component={Detail}/>
				<Route path="/product/demo" component={Demo}/>
				<Route path="/product/sdk" component={Sdk}/>
				<Route path="/product/document" component={Doc}/>
			</Route>
			<Route path="/gameDetail/" component={GameDetail}/>
		</Route>
		</Router>
	</Provider>,
	rootEl
)
