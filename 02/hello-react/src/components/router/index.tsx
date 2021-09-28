import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../pages/home';
import Stateless from '../../pages/stateless';
import Statefull from '../../pages/stateful';
import Couter from '../../pages/couter';
const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>              
                <Route path="/stateful" component={Statefull}/>
                <Route path="/stateless" component={Stateless}/>
                <Route path="/hooks" component={Couter}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;