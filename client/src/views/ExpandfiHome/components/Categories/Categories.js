import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  image: {
    width: 60,
    height: 60,
    objectFit: 'contain',
    marginBottom: theme.spacing(5),
  },
  descriptionListIcon: {
    '& .description-list-icon__title': {
      fontWeight: 400,
      fontSize: 16,
    },
  },
  cardBase: {
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.main,
  },
}));

const Categories = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader title="How does it work?" align="center" />
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid item xs={6} md={3} key={index} data-aos="fade-up">
            <CardBase noBorder noShadow liftUp className={classes.cardBase}>
            <DescriptionListIcon
              title={item.title}
              subtitle={item.subtitle}
              icon={
              <Image src={item.icon.src}/>
              }
            />
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Categories;
