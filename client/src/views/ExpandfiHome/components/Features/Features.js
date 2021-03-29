import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  colors,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, IconAlternate } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  listItemText: {
    fontSize: '1.2rem',
  
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  icon: {
    borderRadius: '50%',
  },
  featuresTitle: {
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: '48px',
    lineHeight: '54px',
    color: '#121037',
    marginBottom: '10px',
  },
}));

const Features = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <SectionHeader
            title="Understand your customers"
            subtitle="ExpandFi provides you with a detailed analysis of your customers including"
            align="left"
            disableGutter
            data-aos="fade-up"
          />
          <List disablePadding>
            {data.map((item, index) => (
              <ListItem disableGutters key={index} data-aos="fade-up">
                <ListItemAvatar className={classes.listItemAvatar}>
                  <IconAlternate
                    size="extraSmall"
                    fontIconClass="fas fa-check"
                    color={colors.yellow}
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText className={classes.listItemText} primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="./assets/features.png"
            alt="features"
            className={classes.coverImage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Features;
