import * as React from 'react';

import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, render, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (window.learnApp == undefined)
          return (
            <Redirect
              to={{
                pathname: '/user/login',
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
