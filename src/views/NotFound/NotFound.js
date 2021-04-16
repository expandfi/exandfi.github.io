import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 800,
    margin: `0 auto`,
  },
  notFoundCaption: {
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '44px',
    lineHeight: '50px',
    color: '#f9b800',
    marginBottom: '1rem',
  },
  notFoundTitle: {
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '44px',
    lineHeight: '50px',
    color: '#121037',
    marginBottom: '2rem',
  },
  notFoundText: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#121037',
    lineHeight: '28px',
    fontSize:'20px'
  },
}));

const NotFound = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div>
      <Section className={classes.formContainer}>

        <Typography className={classes.notFoundCaption} >
          404
        </Typography>

        <Typography className={classes.notFoundTitle} >
          Oops
        </Typography>

        <Typography className={classes.notFoundText}>
          The page you are looking for does not exist.
        </Typography>

      </Section>
    </div>
  );
};

export default NotFound;
