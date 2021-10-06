import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import tokenAuthService from './../../services/tokenAuth/tokenAuthService';
interface Props extends RouteComponentProps{};

const Login : React.FunctionComponent<Props> = ({history}: Props) =>{
    React.useEffect(() => {
        async function login() {
            let result =await tokenAuthService.authenticate({
                userNameOrEmailAddress: 'admin',
                password: '123qwe',
                rememberClient: false
            });
        }
        login();
        // return () => {
        //   window.clearInterval(timer);
        // };
      }, []);
    return(
        <div>
            <h1>Learn using hook in React</h1>
            <hr/>
            <a onClick={history.goBack} href="void:;">Previous Page</a>
            <div>
                <Link to="/">Home Page</Link>
            </div>
            <div>
                <Link to="/stateful">Stateful</Link>
            </div>
            <div>
                <Link to="/stateless">Stateless</Link>
            </div>
            <div>
                <Link to="/hooks">Hooks</Link>
            </div>
        </div>
    )
}
export default Login;