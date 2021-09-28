import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps{};
const Stateless : React.FunctionComponent<Props> = ({history}: Props) =>{
    return(
        <div>
            <h1>This is Stateless component</h1>
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
export default Stateless;