/*
 费用信息页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon, Input, DatePicker, Checkbox, Table, Pagination } from 'antd'
import *as styles from './CostInfo.css'
import CenterTitle from '../CenterTitle'
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
const columns = [{
  title: '时间',
  dataIndex: 'time',
  width:'25%',
}, {
  title: '使用请求（万次）',
  dataIndex: 'request',
}, {
  title: '单价（元/万次）',
  dataIndex: 'price',
}, {
  title: '当日费用（元）',
  dataIndex: 'cost',
}];

const data = [{
  key: '1',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5200',
}, {
  key: '2',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5200',
}, {
  key: '3',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}, {
  key: '4',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}, {
  key: '5',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}, {
  key: '6',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}, {
  key: '7',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}, {
  key: '8',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}, {
  key: '9',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}, {
  key: '10',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}, {
  key: '11',
  time: '2016-02-06',
  request: 32,
  price: '52',
  cost:'5201',
}];

export default class CostInfo extends Component{
	constructor(props){
		super(props);
	}
	onChange(e){
		console.log(`checked = ${e.target.checked}`);
	}
	onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
	}
	render(){
		return(
			<div >
				<CenterTitle titleStr={'实名认证'}/>
				<Row>
					<Col lg={20} md={20} sm={20} xs={20}>
						<Row className={styles['balance']} >
							<Col lg={20} md={20} sm={24} xs={24}>
								<span >账户余额：12,888元</span>
							</Col>
							<Col lg={4} md={4} sm={18} xs={18} 
							className={styles['datapic']}>
								<DatePicker 
									defaultValue={moment('2015/01/01', dateFormat)}
									 format={dateFormat} />
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col lg={20} md={20} sm={23} xs={23} 
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