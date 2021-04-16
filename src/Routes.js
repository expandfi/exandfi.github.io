/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout, DocsLayout, ExpandfiNav } from './layouts';

import {
  ExpandfiHome as Expandfi,
  FaqPage as FaqPage,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from './views';
import ModularModal from './views/ExpandfiHome/components/ModularModal';

const Routes = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <Switch>
      <Route
        exact 
        path="/"
        render={matchprops => (
          <WithLayout
          {...matchprops}
          component={() => <Expandfi open={open} setOpen={setOpen}/>}
          layout={ExpandfiNav}
          />
        )}
      />
      <Route
        exact 
        path="/faq"
        render={matchprops => (
          <WithLayout
          {...matchprops}
          component={FaqPage}
          layout={ExpandfiNav}
          />
        )}
      />
      <Route
        exact
        path="/not-found"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={ExpandfiNav}
          />
        )}
      />
      <Redirect to="/not-found" />
      
    </Switch>
    <ModularModal open={open} setOpen={setOpen}/>
    </>
  );
};

export default Routes;
