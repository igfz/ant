/*
 交易记录页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon, Checkbox, Table, Pagination,Select  } from 'antd'
import *as styles from '../CostInfo/CostInfo.css'
import CenterTitle from '../CenterTitle'
const columns = [{
  title: '时间',
  dataIndex: 'time',
  width:'25%',
}, {
  title: '交易类型',
  dataIndex: 'transac_type',
}, {
  title: '交易金额',
  dataIndex: 'transac_monery',
}, {
  title: '交易方式',
  dataIndex: 'transac_mode',
}, {
  title: '交易后账号余额',
  dataIndex: 'balance',
}];

const data = [{
  key: '1',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '2',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '3',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '4',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '5',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '6',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '7',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '8',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '9',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '10',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}, {
  key: '11',
  time: '2016-02-06',
  transac_type: '充值',
  transac_monery: '52',
  transac_mode:'支付宝',
  balance:'200'
}];
export default class TransactRecord extends Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange(value) {
  console.log(`selected ${value}`);
	}
	render(){
		return(
			<div >
				<CenterTitle titleStr={'交易记录'}/>
				<Row className={styles['select_type']}>
					<Col lg={20} md={20} sm={24} xs={24}>
						<Select  
							className={styles['choose_type']}
							size="large" defaultValue="选择消费类型"onChange={this.handleChange}>
				      <Option value="jack">Jack</Option>
				      <Option value="lucy">Lucy</Option>
				      <Option value="disabled" disabled>Disabled</Option>
				      <Option value="yiminghe">Yiminghe</Option>
				    </Select>
					</Col>
				</Row>
				<Row>
					<Col lg={20} md={20} sm={24} xs={24} 
					 className={styles['table_list']}>
					<Table columns={columns} dataSource={data} 
					pagination={false} />
					</Col>
				</Row>
				<Row className={styles['paging']}>
					<Col lg={20} md={20} sm={24} xs={24} >
						<Row>
						<Col lg={21} md={21} sm={24} xs={24} >
							<Pagination showQuickJumper defaultCurrent={2} total={50} />
						</Col>
						<Col lg={3} md={3} sm={0} xs={0} >
							<Button>续订服务</Button>
						</Col>
						</Row>
					</Col>
				</Row>
			</div>
			)
	}
}