import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import { props } from 'views/WebBasic/data';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#030195'
  },
  inner: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8),
    },
  },
  innerNarrowed: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const SectionAlternate = props => {
  const { image, children, innerNarrowed, className, ...rest } = props;

  const classes = useStyles();

  return (
    <section
      className={clsx('section-alternate', classes.root, className)}
      style={{backgroundImage: image}}
      {...rest}
    >
      <div
        className={clsx(
          'section-alternate__content',
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {},
        )}
      >
        {children}
      </div>
    </section>
  );
};

SectionAlternate.propTypes = {
  image: PropTypes.string,
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  innerNarrowed: PropTypes.bool,
};

export default SectionAlternate;
