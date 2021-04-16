import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, Button, Modal } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';
import { Section } from 'components/organisms';
import SweetAlert from 'sweetalert-react';
import "../../../../../node_modules/sweetalert/dist/sweetalert.css";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    // background: theme.palette.primary.dark,
    backgroundImage: `url('./assets/hero-bg-image.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(4),
    },
    minHeight: 490,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: '10',
    position: 'relative'
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
      maxWidth: '60%',
      width: 'calc(100vw - 625px)',
    },
  },
  textWhite: {
    color: 'white',
  },
  text1: {
    color: 'white',
    fontWeight: 600,
    fontSize: '1.8rem',
    marginBottom: '1rem'
  },
  text2: {
    color: 'white',
    fontWeight: 900,
    fontSize: '2.8rem'
  },
  text25: {
    color: '#2BFFD8',
    fontWeight: 900,
    fontSize: '2.8rem',
    marginLeft: "14px"
  },
  text3: {
    fontSize: '1.3rem',
    color: 'white',
    fontWeight: 600,
    marginTop: '1.3rem',
    marginBottom: '3rem'
  },
  text35: {
    fontSize: '1.3rem',
    color: 'white',
    fontWeight: 600,
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  text4: {
    fontSize: '.9rem',
    color: 'white',
    fontWeight: 400,
    marginTop: '1rem'
  },
  emailField: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxShadow: 'inset 0px 1px 0px rgba(255, 255, 255, 0.1)',
    borderRadius: '2px',
  },
  btn: {
    background: '#AA2CFF',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    padding: '10px',
    '&:disabled': {
      background: '#AA2CFF',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '600',
      padding: '10px'
    },
    '&:hover': {
      background: '#951BE8',
      color: 'white'
    }
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

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [disable, setDisabled] = React.useState(true);
  const [show, setShow] = React.useState(false)

  const handleEmailValidation = event => {
    let isValid = true;

    setEmail(event.target.value);
    if (typeof email !== "undefined") {
      const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegEx.test(email)) {
        isValid = false;
        setError(
          <Typography
            variant="subtitle2"
            color="error"
          >Please enter valid email address.
        </Typography>
        );
        setDisabled(true);
      } else {
        setError("");
        setDisabled(false);
      }
    }
    // console.log(email);
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyBimTtxeLuTI8DOKTcYlTrIwrhQmLNe3_7AvvZy147EAbfXF75j0-1laaN5GcLnGJJ/exec'
  const form = document.forms['submit-to-google-sheet']


  function handleSubmit(event) {
    event.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response);
        setShow(true);
    })
    .catch(error => console.error('Error!', error.message))      

  }

  const title = (
    <Typography variant="h2" component="span" className={classes.text2}>
      Expand your
      <TypedText
        component="span"
        variant="h2"
        color="secondary"
        className={classes.text25}
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
            <Grid data-aos="fade-up">
            <Typography variant="h4" gutterBottom className={classes.text1}>
              Own your customer
            </Typography>
              {title}
              <Typography className={classes.text3}>
                We make it easy to centralize, understand, enrich, and reach your customers - so that you can focus on omnichannel growth. 
              </Typography>
            
              <Typography className={classes.text35}>
                Get started today
                </Typography>

              <Grid container spacing={1} alignItems="center" data-aos="fade-up">
                <Grid item xs={12} sm={7}>
                <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                  <TextField
                            className={classes.emailField}
                            placeholder="Enter Email Address"
                            variant="outlined"
                            size="small"
                            name="email"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={handleEmailValidation}
                            onMouseLeave={handleEmailValidation}
                  />
                  </form>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Button
                            fullWidth
                            className={classes.btn}
                            size="small"
                            disabled={disable}
                            onClick={handleSubmit}
                            type="submit"
                  >
                    JOIN OUR WAITLIST
                  </Button>
                </Grid>
                <SweetAlert
                  show={show}
                  type="success"
                  title="You're on the list!"
                  onConfirm={() => setShow(false)}
                />
              </Grid>
              {error}
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.text4}
              >
                *By entering your information, you agree to our Terms & Conditions, Privacy Policy and to receive marketing communications from ExpandFi.
                  </Typography>
            </Grid>
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
