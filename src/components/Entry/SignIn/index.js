import React, { Component, PropTypes } from 'react'
import {Row,Col,Button,Form,Input } from 'antd'
import styles from './index.css'
import {Link } from 'react-router'

const FormItem = Form.Item;
const NormalLoginForm = Form.create()(React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="用户名">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码!' }],
          })(
            <Input type="password" placeholder="请输入你的密码" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className={styles.loginBtn}>
            登　录
          </Button>
          <a className={styles.forget}>忘记密码</a><Link to="/join" className={styles.signUp}>免费注册</Link>
        </FormItem>
      </Form>
    );
  },
}));

export default class SignIn extends Component {

	render() {
		return (
			<Row className={styles.wrap}>
				<Col span={2} className={styles.dn}></Col>
				<Col span={9} className={styles.left+' '+styles.dn}></Col>
				<Col span={5} className={styles.dn}></Col>
				<Col span={6} className={styles.main+' '+styles.dn}>
					<NormalLoginForm />
				</Col>
				<Col span={2} className={styles.dn}></Col>
        <Col span={24} className={styles.main+' '+styles.h5}>
          <NormalLoginForm/>
        </Col>
			</Row>
		)
	}
}
