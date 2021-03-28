import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField,Typography, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: 470,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  sectionHeader: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      width: 'calc(100vw - 625px)',
    },
  },
  textWhite: {
    color: 'white',
  },
  image: {
    alignSelf: 'flex-end',
    maxWidth: 625,
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: 'auto',
      transform: 'translateY(-50%) !important',
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Expand your
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="secondary"
        className={classes.fontWeight900}
        typedProps={{
          strings: [
            'reach',
            'channels',
            'relevance',
            'data',
            'sales',
            'profits',
            'value',
          ],
          typeSpeed: 50,
          loop: true,
        }}
      />
    </Typography>
  );

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.hero}>
        <Section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h6" gutterBottom className={classes.textWhite}>
              Own your customer
            </Typography>
            <SectionHeader
              titleVariant="h3"
              title={title}
              subtitle={
                <span className={classes.textWhite}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </span>
              }
              ctaGroup={[
                <div>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Get started today
                  </Typography>
                  <TextField
                    placeholder="Enter your email"
                    variant="outlined"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                  />
                  <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  size="large"
                >
                  JOIN OUR WAITLIST
                  </Button>
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Lorem ipsum dolor sit amet, consectetur adioiscing elit, sed do.
                  </Typography>
               </div>
              ]}
              align="left"
              data-aos="fade-up"
            />
          </div>
        </Section>
        <Image
          src="https://assets.maccarianagency.com/the-front/illustrations/macbook-dashboard.png"
          className={classes.image}
          data-aos="fade-up"
          lazy={false}
        />
      </div>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
