import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, Button, Modal } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';
import { Section } from 'components/organisms';
import axios from "axios";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
    backgroundImage: `url('./assets/hero-bg-image.png')`
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
  text1: {
    color: 'white',
    fontWeight: 600,
  },
  text2: {
    color: 'white',
    fontWeight: 900,
  },
  text25: {
    color: '#2BFFD8',
    fontWeight: 900,
  },
  text3: {
    fontSize: '1.3rem',
    color: 'white',
    fontWeight: 600,
    marginBottom: '1rem'
  },
  text4: {
    fontSize: '1rem',
    color: 'white',
    fontWeight: 600,
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
    padding: '10px'
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
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [disable, setDisabled] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Email:', email);
    // You should see email and password in console.
    // ..code to submit form to backend here...
    let config = {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    axios.post('https://sheet.best/api/sheets/966ef6cc-b584-4515-8f7f-48ab10f3cfd4', {Email: email}, config)
      .then(response => {
        console.log(response);
      })

  }

  const title = (
    <Typography variant="h2" component="span" className={classes.text2}>
      Expand your
      <br />
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

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Join Our Waitlist</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
        <TextField
          className={classes.emailField}
          placeholder="Enter your email"
          variant="outlined"
          size="small"
          name="email"
          fullWidth
          type="email"
          onChange={handleEmailValidation}
        />
        <Button
          fullWidth
          className={classes.btn}
          size="small"
          disabled={disable}
          onClick={handleOpen}
        >
          JOIN OUR WAITLIST
        </Button>
    </div>
  );

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.hero}>
        <Section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h4" gutterBottom className={classes.text1}>
              Own your customer
            </Typography>
            <SectionHeader
              titleVariant="h3"
              title={title}
              subtitle={
                <span className={classes.text3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </span>
              }
              align="left"
              data-aos="fade-up"
            />
``
            <Grid>
              <Typography

                className={classes.text3}
              >
                Get started today
                  </Typography>

              <Grid container spacing={1} alignItems="center" data-aos="fade-up">
                <Grid item xs={12} sm={7}>
                  <TextField
                    className={classes.emailField}
                    placeholder="Enter your email"
                    variant="outlined"
                    size="small"
                    name="email"
                    fullWidth
                    type="email"
                    onChange={handleEmailValidation}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Button
                    fullWidth
                    className={classes.btn}
                    size="small"
                    disabled={disable}
                    onClick={handleOpen}
                  >
                    JOIN OUR WAITLIST
                        </Button>
                </Grid>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body}
                </Modal>
              </Grid>
              {error}
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.text4}
              >
                Lorem ipsum dolor sit amet, consectetur adioiscing elit, sed do.
                  </Typography>
              </form>
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
