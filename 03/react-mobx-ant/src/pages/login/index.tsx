import './index.less';

import * as React from 'react';

import { Button, Card, Checkbox, Col, Form, Input, Modal, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { inject, observer } from 'mobx-react';

// import AccountStore from '../../stores/accountStore';
import AuthenticationStore from '../../stores/authenticationStore';
import { FormInstance } from 'antd/lib/form';
import { Redirect } from 'react-router-dom';
import StoresName from '../../stores/storeName';
import rules from './index.validation';

const FormItem = Form.Item;

export interface ILoginProps {
  authenticationStore?: AuthenticationStore;
  history: any;
  location: any;
}

@inject(StoresName.AuthenticationStore)
@observer
class Login extends React.Component<ILoginProps> {
  formRef = React.createRef<FormInstance>();
  handleSubmit = async (values: any) => {
    const { loginModel } = this.props.authenticationStore!;
    await this.props.authenticationStore!.login(values);
    sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
    const { state } = this.props.location;
    window.location = state ? state.from.pathname : '/';
  };

  public render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.authenticationStore!.isAuthenticated){
      return <Redirect to={from} />;
    } 

    const { loginModel } = this.props.authenticationStore!;
    return (
      <Form className="" onFinish={this.handleSubmit} ref={this.formRef}>
          <Row style={{ marginTop: 10 }}>
            <Col span={8} offset={8}>
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <h3>{'WellcomeMessage'}</h3>
                </div>
                <FormItem name={'userNameOrEmailAddress'} rules={rules.userNameOrEmailAddress}>
                  <Input placeholder={'UserNameOrEmail'} prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" />
                </FormItem>

                <FormItem name={'password'} rules={rules.password}>
                  <Input placeholder={'Password'} prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" size="large" />
                </FormItem>
                <Row style={{ margin: '0px 0px 10px 15px ' }}>
                  <Col span={12} offset={0}>
                    <Checkbox checked={loginModel.rememberMe} onChange={loginModel.toggleRememberMe} style={{ paddingRight: 8 }} />
                    {'RememberMe'}
                    <br />
                    <a>{'ForgotPassword'}</a>
                  </Col>

                  <Col span={8} offset={4}>
                    <Button style={{ backgroundColor: '#f5222d', color: 'white' }} htmlType={'submit'} danger>
                      {'LogIn'}
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
      </Form>
    );
  }
}

export default Login;
