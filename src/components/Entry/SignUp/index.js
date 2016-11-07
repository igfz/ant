import React, { Component, PropTypes } from 'react'
import {Row,Col,Button,Form,Input,Checkbox } from 'antd'
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
      	<h1>注册账号</h1>
        <FormItem label="用户名">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem label="邮箱">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入邮箱!' }],
          })(
            <Input placeholder="请输入邮箱" />
          )}
        </FormItem>
        <FormItem label="手机">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入手机号!' }],
          })(
            <Input placeholder="请输入手机号" />
          )}
        </FormItem>
        <FormItem label="验证码">
        	<Row>
            <Col span={18}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入验证码!' }],
              })(
                <Input size="large" />
              )}
            </Col>
            <Col span={6}>
              <Button size="large" className={styles.sms}>发送短信</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="短信验证码">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem label="登录密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的登录密码!' }],
          })(
            <Input type="password" placeholder="请输入你的登录密码" />
          )}
        </FormItem>
        <FormItem>
        	<p>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>我同意并遵守网站<a>使用条款</a>及<a>隐私政策</a></Checkbox>
            )}
          </p>
          <Button type="primary" htmlType="submit" className={styles.regBtn}>
            注　册
          </Button>
        </FormItem>
      </Form>
    );
  },
}));

export default class SignUp extends Component {

	render() {
		return (
			<Row className={styles.wrap}>
				<Col span={8}></Col>
				<Col span={8} className={styles.main}><NormalLoginForm /></Col>
				<Col span={8}></Col>
			</Row>
		)
	}
}
