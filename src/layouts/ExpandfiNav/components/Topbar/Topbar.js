import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Toolbar,
  List,
  ListItem,
  Typography,
  Button,
  Popover,

} from '@material-ui/core';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '85%',
    height: '85%',
  },
}));

const Topbar = ({ themeMode, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
      <div>
        <a href="/" title="ExpandFi">
          <Image
            className={classes.logoImage}
            src='./assets/logo.png'
            alt="ExpandFi"
            lazy={false}
          />
        </a>
      </div>
      <List>
        <ListItem>
          <Typography>
            Features
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            How It Works
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Testimonials
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Pricing
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            FAQ
          </Typography>
        </ListItem>
        <ListItem>
          <Button>
            JOIN OUR WAITLIST
          </Button>
        </ListItem>
      </List>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
