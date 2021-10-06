import * as React from 'react';
import { Layout } from 'antd';
import './index.less';
const Footer = () => {
  
  return (
    <Layout.Footer className={'footer'} style={{ textAlign: 'center' }}>
      Learn React © 2021 <a href="#">Github Page</a>
    </Layout.Footer>
  );
};
export default Footer;
