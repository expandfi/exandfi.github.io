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

} from '@material-ui/core';
import { Image } from 'components/atoms';
import  ModularModal  from '../../../../views/ExpandfiHome/components/ModularModal';

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
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto'
  },
  logoImage: {
    width: '85%',
    height: '85%',
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  btn: { 
    background:'#AA2CFF',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    padding:'10px 20px 10px 20px',
    height: '2.8rem',
    marginRight: '-20px'
  },
}));


const nav = [
  {
    title:'Features',
    anchor:'/#features'
  },
  {
    title:'How It Works',
    anchor:'/#howItWorks'
  },
  {
    title:'Testimonials',
    anchor:'/#testimonials'
  },
  {
    title:'Pricing',
    anchor:'/#pricing'
  },
  {
    title:'FAQ',
    anchor:'/faq'
  },
  
]

const Topbar = ({ openModal, themeMode, className, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
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

      <List className={classes.navigationContainer}>
      {nav.map((link, index) => (
        <ListItem className={classes.listItem} key={index}>
        <a href={link.anchor}>
          <Typography noWrap>
            {link.title}
          </Typography>
          </a>
        </ListItem>
      ))}
      </List>
      <Button
        className={classes.btn}
        size="small"
        onClick={() => setOpen(true)}
        >
        SIGN UP
        </Button>
    </Toolbar>
    <ModularModal open={open} setOpen={setOpen}/>
    </>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
