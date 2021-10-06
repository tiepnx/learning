import './App.css';
import * as React from 'react';
import Router from './components/router';
import StoresName from './stores/storeName';
import { inject } from 'mobx-react';
import SessionStore from './stores/sessionStore';
import {getUserId} from './helpers/utilities';
import Loading from './components/loading';
export interface IAppProps {
  sessionStore?: SessionStore;
}
type AppState ={
  isReady: boolean
}

@inject(StoresName.SessionStore)
class App extends React.Component<IAppProps, AppState> {
  state: AppState = {
    isReady: false
  }
  async componentDidMount() {
    const userId = getUserId();
    if(userId != null){
      await this.props.sessionStore!.getCurrentLoginInformations(userId);
      window.learnApp = this.props.sessionStore?.currentLogin.user;
      this.setState({
        isReady: true
      });
    }else{
      this.setState({
        isReady: true
      });
    }
  }

  public render() {
    if(this.state.isReady) return <Router />;
    return <Loading />
  }
}

export default App;

