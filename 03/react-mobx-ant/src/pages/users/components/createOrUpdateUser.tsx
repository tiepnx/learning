import * as React from 'react';

import { Checkbox, Input, Modal, Tabs, Form } from 'antd';
import rules from './createOrUpdateUser.validation';
import { FormInstance } from  'antd/lib/form';


export interface ICreateOrUpdateUserProps {
  visible: boolean;
  onCancel: () => void;
  modalType: string;
  onCreate: (values: any) => void;
  formRef: React.RefObject<FormInstance>;
}
const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 6 },
    md: { span: 6 },
    lg: { span: 6 },
    xl: { span: 6 },
    xxl: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 18 },
    sm: { span: 18 },
    md: { span: 18 },
    lg: { span: 18 },
    xl: { span: 18 },
    xxl: { span: 18 },
  },
};
const tailFormItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 6 },
    md: { span: 6 },
    lg: { span: 6 },
    xl: { span: 6 },
    xxl: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 18 },
    sm: { span: 18 },
    md: { span: 18 },
    lg: { span: 18 },
    xl: { span: 18 },
    xxl: { span: 18 },
  },
};
const  CreateOrUpdateUser: React.FC<ICreateOrUpdateUserProps> = ({
  modalType,
  visible, onCancel, onCreate})=>{
  const [form] = Form.useForm();
  return (
    <Modal visible={visible} width={600} cancelText='Cancel' okText='OK' onCancel={onCancel}
    onOk={()=>{
      form.validateFields().then(async (values: any) => await onCreate(values));
    }} 
    title={'User'} destroyOnClose={true}>
      <Form form={form}>
        <Form.Item label='Name' {...formItemLayout} name={'fullName'} rules={rules.fullName}>
          <Input />
        </Form.Item>
        <Form.Item label='UserName' {...formItemLayout} name={'userName'} rules={rules.userName}>
          <Input />
        </Form.Item>
        <Form.Item label='Email' {...formItemLayout} name={'emailAddress'} rules={rules.emailAddress as []}>
          <Input />
        </Form.Item>
        {modalType === 'edit' ? (
          <Form.Item
            label='Password'
            {...formItemLayout}
            name={'password'}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              }
            ]}
          >
            <Input type="password" />
          </Form.Item>
        ) : null}
        {modalType === 'edit' ? (
          <Form.Item
            label='Confirm Password'
            dependencies={['password']}
            {...formItemLayout}
            name={'confirm'}
            rules={[
              {
                required: true,
                message: 'Please input your confirm password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve(true);
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              })
            ]}
          >
            <Input type="password" />
          </Form.Item>
        ) : null}
        <Form.Item label='IsActive' {...tailFormItemLayout} name={'isActive'} valuePropName={'checked'}>
          <Checkbox></Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateOrUpdateUser;
