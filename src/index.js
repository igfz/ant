import 'babel-polyfill'//浏览器填缝工具
import React from 'react'
import ReactDOM from 'react-dom' //14版本以后，reactDom已从React中分离
import { Provider } from 'react-redux' //Provider将redux数据结构与react绑定
import App from 'App'
import Index from 'Index'

import Advantage from 'Advantage'
import Budget from 'Budget'

import ProductDesc from 'ProductDesc'
import Demo from 'ProductDesc/Main/Demo'
import Detail from 'ProductDesc/Main/Detail'
import Doc from 'ProductDesc/Main/Doc'
import Sdk from 'ProductDesc/Main/Sdk'

import ApplicationCenter from 'ApplicationCenter'
import Myapp from 'ApplicationCenter/Myapp'
import AppSet from 'ApplicationCenter/AppSet'
import BaseInfo from 'ApplicationCenter/AppSet/BaseInfo'
import AppKey from 'ApplicationCenter/AppSet/AppKey'
import AppService from 'ApplicationCenter/AppSet/AppService'

import SignIn from 'Entry/SignIn'
import SignUp from 'Entry/SignUp'
import SignUpSuccess from 'Entry/SignUp/Success'

import DocumentCenter from 'DocumentCenter'
import Center from 'DocumentCenter/Center'
import DocDetail from 'DocumentCenter/DocDetail'
import DocSearch from 'DocumentCenter/DocSearch'

import UserCenter from 'UserCenter'
import ResetClass from 'Reset'
import AccountInfo from 'UserCenter/AccountInfo'
import Certification from 'UserCenter/Certification'
import CostInfo from  'UserCenter/CostInfo'
import TransactRecord from 'UserCenter/TransactRecord'
import {PaySuccess,Recharge} from 'UserCenter/AccountInfo/Recharge'
import FreeUse from 'ApplicationCenter/FreeUse'
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
				<Route path="/advantage" component={Advantage}/>
				<Route path="/budget" component={Budget}/>
				<Route path="/product" component={ProductDesc}>
					<IndexRoute component={Detail}/>
					<Route path="/product/demo" component={Demo}/>
					<Route path="/product/sdk" component={Sdk}/>
					<Route path="/product/document" component={Doc}/>
				</Route>
				<Route path="/application" component={ApplicationCenter}>
					<IndexRoute component={Myapp}/>
					<Route path="/application/setting" component={AppSet}>
						<IndexRoute component={BaseInfo}/>
						<Route path="/application/setting/key" component={AppKey }/>
						<Route path="/application/setting/service" component={AppService}/>
					</Route>
					<Route path="/application/freeuse" component={FreeUse }>
					</Route>
				</Route>
				<Route path="/login" component={SignIn}/>
				<Route path="/join" component={SignUp}/>
				<Route path="/joinSuccess" component={SignUpSuccess}/>
				<Route path="/documents" component={DocumentCenter}>
					<IndexRoute component={Center}/>
					<Route path="/documents/detail" component={DocDetail}/>
					<Route path="/documents/search" component={DocSearch}/>
				</Route>
				<Route path="/usercenter" component={UserCenter}>
					<IndexRoute component={AccountInfo}/>
					<Route path="/usercenter/accountinfo" 
						component={AccountInfo} />
					<Route path="/usercenter/certification" 
						component={Certification}/>
					<Route path="/usercenter/costinfo" 
						component={CostInfo}/>
					<Route path="/usercenter/transactrecord" 
						component={TransactRecord}/>
				</Route>
				<Route path="/usercenter/paysuccess" component={PaySuccess}>
				</Route>
				<Route path="/usercenter/recharge" component={Recharge}>
				</Route>
				<Route path="/reset" component={ResetClass}/>

			</Route>
		</Router>
	</Provider>,
	rootEl
)
 