import './AppLayout.less';

import * as React from 'react';

import { Redirect, Switch, Route } from 'react-router-dom';

import DocumentTitle from 'react-document-title';
import Footer from '../footer';
import Header from '../header';
import { Layout } from 'antd';
import ProtectedRoute from '../../components/router/ProtectedRoute';
import SiderMenu from '../siderMenu';
import { appRouters } from '../router/router.config';
import NotFoundRoute from '../router/NotFoundRoute';

const { Content } = Layout;

class AppLayout extends React.Component<any> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };

  render() {
    const {
      history,
      location: { pathname },
    } = this.props;

    const { path } = this.props.match;
    const { collapsed } = this.state;

    const layout = (
      <Layout style={{ minHeight: '100vh' }}>
        <SiderMenu path={path} onCollapse={this.onCollapse} history={history} collapsed={collapsed} />
        <Layout>
          <Layout.Header style={{ background: '#fff', minHeight: 52, padding: 0 }}>
            <Header collapsed={this.state.collapsed} toggle={this.toggle} />
          </Layout.Header>
          <Content style={{ margin: 16 }}>
            <Switch>
              {pathname === '/' && <Redirect from="/" to="/users" />}
              {appRouters
                .filter((item: any) => !item.isLayout)
                .map((route: any, index: any) => (
                  <Route
                    exact
                    key={index}
                    path={route.path}
                    render={(props) => <ProtectedRoute component={route.component} />}
                  />
                ))}
              {pathname !== '/' && <NotFoundRoute />}
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );

    return <DocumentTitle title={'applayout'}>{layout}</DocumentTitle>;
  }
}

export default AppLayout;
