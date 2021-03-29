import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Icon, LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Pricings = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Our pricing"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            withShadow
            liftUp
            title="Start-Up"
            subtitle="If you have <10,000 unique customers"
            priceComponent={
              <div>
                <Typography
                  variant="h3"
                  component="span"
                  className={classes.fontWeight900}
                >
                  $20
                </Typography>
                <Typography component="span" variant="subtitle1">
                  / mo
                </Typography>
              </div>
            }
            features={[
              '$0.10 per Email append',
              '$0.07 per Phone append',
              '$0.10 per Demograpgic & Behavioral append',
              'Customer metrics',
              'Facebook Custom Audience Creation & Export',
              'Review to Customer Match',
              'Review Import/Export',
              'Weekly Review Tracking',
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={theme.palette.primary.main}
              />
            }
            cta={
              <Button
                color="primary"
                variant="outlined"
                fullWidth
                size="large"
              >
                Get Started
              </Button>
            }
            // disclaimer="Fully featured 30-day free trial"
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            title="Growth"
            liftUp
            subtitle="If you have <100,000 unique customers"
            priceComponent={
              <div>
                <Typography
                  variant="h3"
                  component="span"
                  className={classes.fontWeight900}
                >
                  $50
                </Typography>
                <Typography component="span" variant="subtitle1">
                  / mo
                </Typography>
              </div>
            }
            features={[
              '$0.08 per Email append',
              '$0.05 per Phone append',
              '$0.08 per Demograpgic & Behavioral append',
              'Customer metrics',
              'Facebook Custom Audience Creation & Export',
              'Review to Customer Match',
              'Review Import/Export',
              'Weekly Review Tracking',
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={theme.palette.primary.main}
              />
            }
            cta={
              <Button color="primary" variant="contained" fullWidth size="large">
                Get Started
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up">
          <CardPricingStandard
            variant="outlined"
            title="Pro"
            liftUp
            subtitle="If you have 100,000+ unique customers"
            priceComponent={
              <div>
                <Typography
                  variant="h3"
                  component="span"
                  className={classes.fontWeight900}
                >
                  $100
                </Typography>
                <Typography component="span" variant="subtitle1">
                  / mo
                </Typography>
              </div>
            }
            features={[
              '$0.06 per Email append',
              '$0.03 per Phone append',
              '$0.06 per Demograpgic & Behavioral append',
              'Customer metrics',
              'Facebook Custom Audience Creation & Export',
              'Review to Customer Match',
              'Review Import/Export',
              'Weekly Review Tracking',
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={theme.palette.primary.main}
              />
            }
            cta={
              <Button color="primary" variant="outlined" fullWidth size="large">
                Get Started
              </Button>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Pricings;
