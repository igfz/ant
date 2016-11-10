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
				<Col className={styles['money']} lg={24}>
					<Row className={styles['money_info']}
						Row type='flex' align='bottom'>
							<Col Col lg={16}>账户余额：12,888.00</Col>	
							<Col lg={4}>
								<DatePicker 
									defaultValue={moment('2015/01/01', format)} 
									format={format} />
								</Col>					
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={20}>
							<Table  columns={columns} dataSource={data}   
									pagination={false}/>
						</Col>
						<Col lg={20}>
							<Row>
								<Col lg={21}>
									<Pagination showQuickJumper 
										defaultCurrent={2} total={3}/>
								</Col>
								<Col lg={3}>
									<Button>继续顶服务</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
			)
	}
}