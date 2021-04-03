import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, ListItem, ListItemText } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';


const useStyles = makeStyles(theme => ({
  fontWeightBold: {
    fontWeight: 900,
  },
  faqTitle: {
    display: 'block',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  faqPad: {
    padding: '0px 20px 0px 20px'
  }
}));

const Faq = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Frequently asked questions"
        titleProps={{
          className: classes.fontWeightBold,
        }}
      />
      <Grid container spacing={isMd ? 4 : 0}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <ListItem  className={classes.faqPad} key={index} data-aos="fade-up">
              <ListItemText
                primary={item.title}
                secondary={item.text}
                primaryTypographyProps={{
                  variant: 'h6',
                  className: clsx(classes.fontWeightBold, classes.faqTitle),
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'textPrimary',
                }}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Faq;
