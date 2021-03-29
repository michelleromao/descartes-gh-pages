import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Index from './pages/index';

function Routes() {
  return (
    <>
     <Route exact path="/descartes-gh-pages" component={Index} />
     <Route exact path="/">
        <Redirect to="/descartes-gh-pages" />
      </Route>

    </>
  )
}
export default Routes;