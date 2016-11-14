/*
 费用信息页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon, Input, DatePicker, Checkbox, Table, Pagination, } from 'antd'
import *as styles from './CostInfo.css'
import moment from 'moment';
const format = 'YYYY/MM/DD';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  //render: text => <a href="#">{text}</a>,
	}, {
	  title: 'Age',
	  dataIndex: 'age',
	}, {
	  title: 'Address',
	  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  //address: 'New York No. 1 Lake Park',
	}, {
	  key: '2',
	  name: 'Jim Green',
	  age: 42,
	  //address: 'London No. 1 Lake Park',
	}, {
	  key: '3',
	  name: 'Joe Black',
	  age: 32,
	//  address: 'Sidney No. 1 Lake Park',
}];
const rowSelection = {
  getCheckboxProps: record => ({
    disabled: record.name === 'Jim Green',    // Column configuration not to be checked
  }),
};
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
			<Row className={styles['r_wrap']}>
				<Col className={styles['money']} 
					lg={24} md={24} sm={24} xs={24}>
					<Row type='flex' align='bottom'>
							<Col lg={16} md={16} sm={16} xs={16}
								className={styles['money_info']}>
									<span >账户余额：12,888.00</span>
							</Col>	
							<Col lg={4} md={4} sm={4} xs={4}>
								<DatePicker 
									defaultValue={moment('2015/01/01', format)} 
									format={format} 
									className={styles['data_picker']}/>
								</Col>					
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={20} md={20} sm={20} xs={20}>
							<Table  columns={columns} dataSource={data}   
									pagination={false}/>
						</Col>
						<Col className={styles['footer']} 
							lg={20} md={20} sm={20} xs={20}>
							<Row >
								<Col lg={20} md={20} sm={20} xs={20}>
									<Pagination showQuickJumper 
										defaultCurrent={2} total={3}/>
								</Col>
								<Col lg={4} md={4} sm={4} xs={4}>
									<Button className={styles['btn']}>继续顶服务</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
			)
	}
}