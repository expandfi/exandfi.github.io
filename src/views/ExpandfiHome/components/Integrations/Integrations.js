import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 0,
    background: 'transparent',
  },
  logoImage: {
      margin: 'auto',
      padding: '40px',
    },
  logoSection: {
      marginBottom: '3rem'
  }
}));

const Integrations = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={"Expand your reach"}
        subtitle={"Easily create Facebook custom audiences, import/export reviews into Shopify, export emails into Klaviyo and more. We integrate with some of the most well-known platforms."}
        data-aos="fade-up"
      />
      <Grid className={classes.logoSection} container spacing={isMd ? 4 : 1}>
        {data.map((item, index) => (
          <Grid
            className={classes.logoImage}
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={6}
            sm={4}
            md={4}
            data-aos={'fade-up'}
          >
          <Image className={classes.logoImages} src={item.logo} alt={item.alt} />

          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Integrations.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Integrations;
