import React,{ Component, PropTypes } from 'react'
import { Col, Row, Button, Icon, Checkbox, Input   } from 'antd'
import *as styles from './Certification.css'
import CertificationPerson from './Certification.js'
import CertifiCompany from './CertifiCompany.js'
import CenterTitle from '../CenterTitle'
class Certification extends Component{
	constructor(props){
		super(props);
		this.state={
			person:true,
			company:false,
		}
		this.onChange=this.onChange.bind(this);
		this.autoShow=this.autoShow.bind(this);
	}
	onChange(e){
		if(/person/.test(e.target.name)){
			this.setState({
					person:true,
					company:false,
			})
			this.autoShow(e.target.name)
		}else{
			this.setState({
					person:false,
					company:true,
			})
			this.autoShow(e.target.name)
		}
	}
	autoShow(flag){
		if(/company/.test(flag)){
			this.refs.pn.style.display='none'
			this.refs.cp.style.display='block'
			return
		}
			this.refs.pn.style.display='block'
			this.refs.cp.style.display='none'
	}
		render(){
		return(
			<div>
			<Row className={styles['r_wrap']}>
				<Col className={styles['money']} 
				lg={24} md={24} sm={24} xs={24}>
					<CenterTitle titleStr={'实名认证'}/>
					<Row type='flex' align='bottom'className={styles['checked']}>
						<Col lg={24} md={24} sm={24} xs={24}
							className={styles['choose_pre']}>
							<div>请选择实名验证方式</div>
							<Checkbox
								onChange={this.onChange}
								checked={this.state.person}
								name='person'>
								个人
							</Checkbox>
							<Checkbox 
								checked={this.state.company}
								name='company' 
								onChange={this.onChange}>
								公司
							</Checkbox>
						</Col>
					</Row>
					<div ref='cp' className={styles['hidden_flag']}>
						<CertifiCompany/>
					</div>
					<div ref='pn' className={styles['show_flag']}>
						<CertificationPerson/>
					</div>
				</Col>
			</Row>
			</div>
			)
	}
}

export default Certification