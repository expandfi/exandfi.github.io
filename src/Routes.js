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
  Home as HomeView,
  IndexView,
  Agency as AgencyView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Coworking as CoworkingView,
  Elearning as ElearningView,
  Enterprise as EnterpriseView,
  Service as ServiceView,
  WebBasic as WebBasicView,
  DesktopApp as DesktopAppView,
  Expo as ExpoView,
  Startup as StartupView,
  DesignCompany as DesignCompanyView,
  MobileApp as MobileAppView,
  JobListing as JobListingView,
  Rental as RentalView,
  CloudHosting as CloudHostingView,
  Logistics as LogisticsView,
  Ecommerce as EcommerceView,
  Pricing as PricingView,
  About as AboutView,
  HelpCenter as HelpCenterView,
  HelpCenterArticle as HelpCenterArticleView,
  PortfolioPage as PortfolioPageView,
  PortfolioMasonry as PortfolioMasonryView,
  PortfolioGrid as PortfolioGridView,
  CompanyTerms as CompanyTermsView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  BlogSearch as BlogSearchView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  BlogReachView as BlogReachViewView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  Account as AccountView,
  Documentation as DocumentationView,
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
        path="/expandfi"
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
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={IndexView}
            layout={MainLayout}
          />
        )}
      />
      
    </Switch>
    <ModularModal open={open} setOpen={setOpen}/>
    </>
  );
};

export default Routes;
