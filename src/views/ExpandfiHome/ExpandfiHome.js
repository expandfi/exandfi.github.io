import React from 'react';
import { makeStyles,Button, Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Hero, AboutTop, Features, Integrations, Pricings, Categories, Solutions, Reviews, } from './components';
import {
    about,
    categories,
    features,
    integrations,
    solutions,
    reviews
  } from './data';

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const ExpandfiHome = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
        <Hero />

        <Section gradient fullWidth>
          <Section disablePadding>
            <AboutTop title={about[0].title} body={about[0].body} img={about[0].img} alt={about[0].title}/>
          </Section>
          <Section disablePadding>
              <Features data={features} />
          </Section>
          <Section disablePadding>
            <AboutTop title={about[1].title} body={about[1].body} img={about[1].img} alt={about[1].title}/>
          </Section>
          <Section disablePadding>
            <Integrations data={integrations} />
          </Section>
        </Section>

        <SectionAlternate className={classes.sectionNoPaddingTop}>
            <Categories data={categories} />
        </SectionAlternate>

        <SectionAlternate>
            <Solutions data={solutions} />
        </SectionAlternate>

        <SectionAlternate className={classes.reviewSection}>
            <Reviews data={reviews} />
        </SectionAlternate>

        <SectionAlternate>
            <Pricings />
        </SectionAlternate>

        <Section>
            <Grid item xs={12}>
            <SectionHeader
                title="Grow your business with ExpandFi"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                align="center"
                ctaGroup={[
                <Button color="primary" variant="contained" size="large">
                    Get Started
                </Button>,
                ]}
                disableGutter
                data-aos="fade-up"
            />
            </Grid>
        </Section>

    </div>
  );
};

export default ExpandfiHome;
