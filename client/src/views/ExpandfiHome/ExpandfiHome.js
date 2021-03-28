import React from 'react';
import { makeStyles,Button, Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Hero, AboutTop, Features, Integrations, Categories, Solutions, Reviews, Faq, Subscription } from './components';
import {
    about,
    categories,
    faq,
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

        <SectionAlternate>
            <AboutTop title={about[0].title} body={about[0].body} img={about[0].img} alt={about[0].title}/>
         </SectionAlternate>

         <Section>
             <Features data={features} />
         </Section>
            
        <SectionAlternate>
            <AboutTop title={about[1].title} body={about[1].body} img={about[1].img} alt={about[1].title}/>
        </SectionAlternate>

        <SectionAlternate className={classes.integrationsSection}>
            <Integrations data={integrations} />
        </SectionAlternate>

        <Section className={classes.sectionNoPaddingTop}>
            <Categories data={categories} />
        </Section>

        <SectionAlternate>
            <Solutions data={solutions} />
        </SectionAlternate>

        <SectionAlternate className={classes.reviewSection}>
            <Reviews data={reviews} />
        </SectionAlternate>

        {/* <Section className={classes.sectionNoPaddingTop}>
          <Faq data={faq} />
        </Section> */}

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

        {/* <SectionAlternate innerNarrowed className={classes.sectionAlternate}>
            <Subscription />
        </SectionAlternate> */}

    </div>
  );
};

export default ExpandfiHome;
