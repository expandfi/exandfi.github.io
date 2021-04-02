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
          <Section >
            <AboutTop title={about[0].title} body={about[0].body} img={about[0].img} alt={about[0].title}/>
          </Section>
          <Section >
              <Features data={features} />
          </Section>
          <Section >
            <AboutTop title={about[1].title} body={about[1].body} img={about[1].img} alt={about[1].title}/>
          </Section>
          <Section >
            <Integrations data={integrations} />
          </Section>
        </Section>

        <SectionAlternate image="url('./assets/categoriesBG.png')" className={classes.sectionNoPaddingTop}>
            <Categories data={categories} />
        </SectionAlternate>

        <Section>
            <Solutions data={solutions} />
        </Section>

        <SectionAlternate image="url('./assets/testimonialBG.png')" className={classes.reviewSection}>
            <Reviews data={reviews} />
        </SectionAlternate>

        <Section>
            <Pricings />
        </Section>

        <SectionAlternate>
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
        </SectionAlternate>
        <Button className={classes.toTop}>
              Back to the top
        </Button>

    </div>
  );
};

export default ExpandfiHome;
