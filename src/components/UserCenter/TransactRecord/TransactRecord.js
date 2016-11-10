/*
 交易记录页面
 zfl 2016 11 08
*/
import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon, Input, Checkbox, Table, Pagination,Select  } from 'antd'
import *as styles from './TransactRecord.css'
const Option = Select.Option;
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
}
, {
	  title: 'Address',
	  dataIndex: 'address1',
}
, {
	  title: 'Address',
	  dataIndex: 'address2',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
	}, {
	  key: '2',
	  name: 'Jim Green',
	  age: 42,
	  address: 'London No. 1 Lake Park',
	}, {
	  key: '3',
	  name: 'Joe Black',
	  age: 32,
	  address: 'Sidney No. 1 Lake Park',
}];
const rowSelection = {
  getCheckboxProps: record => ({
    disabled: record.name === 'Jim Green',    // Column configuration not to be checked
  }),
};
export default class TransactRecord extends Component{
	constructor(props){
		super(props);
	}
	onChange(e){
		console.log(`checked = ${e.target.checked}`);
	}
	onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
	}
	handleChange(){
		console.log(`selected ${value}`);
	}
	render(){
		return(
			<Row className={styles['r_wrap']}>
				<Col className={styles['money']} lg={24}>
					<Row className={styles['money_info']}
						Row type='flex' align='bottom'>
							<Col Col lg={16}>
								 <Select size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
						      <Option value="jack">Jack</Option>
						      <Option value="lucy">Lucy</Option>
						      <Option value="disabled" disabled>Disabled</Option>
						      <Option value="yiminghe">Yiminghe</Option>
						    </Select>
							</Col>					
					</Row>
					<Row type='flex' align='bottom'>
						<Col lg={20} style={{'textAlign':'center'}}>
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