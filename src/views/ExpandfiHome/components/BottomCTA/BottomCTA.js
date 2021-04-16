import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Avatar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bottomCTADiv: {
    textAlign: 'center'
  },
  title:{
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '32px',
    lineHeight: '40px',
    color: 'white',
    marginBottom: '1rem',
    marginTop: '-1rem'
  },
  subtitle: {
    fontSize: '1.4rem',
    color: 'white'
  },
  btn: {
    background: '#AA2CFF',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    padding: '10px 25px 10px 25px',
    marginTop: '2rem',
    '&:hover': {
      background: '#951BE8',
      color: 'white'
    }
  }
}));

const BottomCTA = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <div className={classes.bottomCTADiv} >
        <Typography className={classes.title} >
          Grow your business with ExpandFi
        </Typography>
        <Typography className={classes.subtitle} >
          Easily create Facebook custom audiences, import/export reviews into Shopify, export emails into Klaviyo and more. We integrate with some of the most well-known platforms.
        </Typography>
        <Button className={classes.btn} onClick={() => props.setOpen(true)}>
          JOIN OUR WAITLIST
        </Button>
      </div>
    </div>
  );
};

BottomCTA.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default BottomCTA;
