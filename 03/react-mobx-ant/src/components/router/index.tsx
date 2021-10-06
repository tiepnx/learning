import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { userRouter, appRouters } from '../router/router.config';
const Router = () =>{
    const UserLayout = userRouter[0].component;
    const AppLayout = appRouters[0].component; 
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/user" render={(props: any) => <UserLayout {...props}/>}/>
                <Route path="/" render={(props: any)=> <AppLayout {...props}/> }/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;