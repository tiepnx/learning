import * as React from 'react';

import AuthenticationStore from '../../stores/authenticationStore';
import StoresName from '../../stores/storeName';
import { inject } from 'mobx-react';

export interface ILogoutProps {
  authenticationStore?: AuthenticationStore;
}

@inject(StoresName.AuthenticationStore)
class Logout extends React.Component<ILogoutProps> {
  componentDidMount() {
    debugger;
    this.props.authenticationStore!.logout();
    window.location.href = '/';
  }

  render() {
    debugger;
    return <></>;
  }
}

export default Logout;
