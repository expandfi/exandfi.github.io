import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: 600,
  },
  aboutTitle: {
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '44px',
    lineHeight: '50px',
    color: '#121037',
    marginBottom: '10px',
  },
  aboutBody: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#121037',
    lineHeight: '28px',
    fontSize:'20px'
  },
}));

const AboutTop = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 8: 4}>
        <Grid
          item
          container
          justify="center"
          alignItems="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src={props.img} 
            alt={props.alt}
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          container
          // alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <Typography className={classes.aboutTitle} title={props.title} align="left">
              {props.title}
            </Typography>
            <Typography className={classes.aboutBody}align="left">
              {props.body}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

AboutTop.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default AboutTop;
