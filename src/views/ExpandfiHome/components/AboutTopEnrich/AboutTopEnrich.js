import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
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
    marginBottom: '2rem',
  },
  aboutBody: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#121037',
    lineHeight: '28px',
    fontSize:'20px'
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
  },
}));

const AboutTopEnrich = props => {
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
            <Button className={classes.btn} onClick={() => props.setOpen(true)}>SIGN UP FOR EXPANDFI</Button>


          </div>
        </Grid>
      </Grid>
    </div>
  );
};

AboutTopEnrich.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default AboutTopEnrich;
