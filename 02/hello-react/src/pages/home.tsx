import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
interface Props extends RouteComponentProps{};
const Home = ({history}: Props) =>{
    return (
        <div>
            <h1>This is homepage</h1>
            <a onClick={history.goBack}>Previous Page</a>
            <div>
                <Link to="/login">login</Link>
            </div>
            <div>
                <Link to="/">Home Page</Link>
            </div>
            <div>
                <Link to="/stateful">Stateful</Link>
            </div>
            <div>
                <Link to="/stateless">Stateless</Link>
            </div>
        </div>
    )
}
export default Home;