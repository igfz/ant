import React, { Component, PropTypes } from 'react'
import {Row,Col,Button,Form,Input,Steps,Tooltip,Icon } from 'antd'
import styles from './index.css'
import {Link } from 'react-router'

const FormItem = Form.Item;
const Step = Steps.Step;
const array = [...Array(3)];
const steps = [{title:'填写基本信息'},{title:'设置新密码'},{title:'修改成功'}];

const ResetFormClass =Form.create()(React.createClass({
  getInitialState() {
    return {
      current: 0,
    };
  },
  next() {
    let current = this.state.current + 1;
    if (current == steps.length) {
      current = 0
      //current = steps.length-1;
    }
    this.setState({ current });
  },
  render() {
    const { current } = this.state
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h1>重置密码</h1>
        <div>
          <Steps current={current} className={styles.steps}>
            {steps.map((s, i) => (
                <Step key={i} title={s.title} description={s.description} />
            ))}
          </Steps>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div className={(current==0?"":styles.dn)}>
            <FormItem label="手机">
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(
                <Input placeholder="请输入手机号" />
              )}
            </FormItem>
            <FormItem label={(
              <span>
                验证码&nbsp;
                <i className={styles.iscode}>000</i>
                <Tooltip title="What do you want other to call you?">
                  <Icon type="reload" spin="true"/>
                </Tooltip>
              </span>
            )}>
              <Row>
                <Col span={18}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: '请输入验证码!' }],
                  })(
                    <Input size="large" />
                  )}
                </Col>
                <Col span={6}>
                  <Button size="large" className={styles.sms} type='primary'>发送短信</Button>
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
          </div>

          <div className={(current==1?"":styles.dn)}>
            <FormItem label="密码">
              {getFieldDecorator('Password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem label="重复新密码">
              {getFieldDecorator('ConfirmPassword', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input placeholder="请输入新密码" />
              )}
            </FormItem>
          </div>

          <div className={(current==2?"":styles.dn)}>
            <div className={styles.success}>重置密码成功</div>
          </div>

        </Form>

        <div style={{ marginTop: 50 }}>
          <Button onClick={this.next}  type="primary" className={styles.regBtn}>{current==2?"登录":"下一步"}</Button>
        </div>
      </div>
    );
  },
}));

export default class ResetForm extends Component {

  render() {
    return (
      <Row className={styles.wrap}>
				<Col className={styles.surplus} xs={{ span: 6 }} sm={{ span: 8 }} md={{ span: 9 }} lg={{ span: 9 }}></Col>
        <Col xs={{ span: 10 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 6 }} className={styles.main} ><ResetFormClass /></Col>
        <Col  className={styles.surplus} xs={{ span: 6 }} sm={{ span: 8 }} md={{ span: 9 }} lg={{ span: 9 }}></Col>
      </Row>
		)
	}
}
