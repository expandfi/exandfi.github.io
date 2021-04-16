import React from 'react';
import { makeStyles,Button, Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Hero, AboutTop, AboutTopEnrich, Features, Integrations, Pricings, Categories, Solutions, Reviews, BottomCTA } from './components';
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
  toTopDiv: {
    height: '0px',
    textAlign: 'right',
    marginRight: '30px'
  },
  toTop: {
    padding: '10px 20px 10px 20px',
    marginTop: '-5rem',
    color: 'white',
    fontWeight: 900
  }
}));

const ExpandfiHome = ({ open, setOpen, themeMode }) => {
  const classes = useStyles();

  return (
    <div>
        <Hero />

        <Section gradient fullWidth>
          <Section >
            <AboutTop title={about[0].title} body={about[0].body} img={about[0].img} alt={about[0].title}/>
          </Section>

          <Section >
              <Features data={features} id='features'/>
          </Section>

          <Section >
            <AboutTopEnrich title={about[1].title} body={about[1].body} img={about[1].img} alt={about[1].title} setOpen={setOpen}/>
          </Section>

          <Section>
            <Integrations data={integrations} />
          </Section>
        </Section>

        <SectionAlternate image="url('./assets/categoriesBG.png')" className={classes.sectionNoPaddingTop}>
            <Categories data={categories} id='howItWorks' />
        </SectionAlternate>

        <Section>
            <Solutions data={solutions} />
        </Section>

        <SectionAlternate image="url('./assets/testimonialBG.png')" className={classes.reviewSection} id='testimonials' >
            <Reviews data={reviews} />
        </SectionAlternate>

        <Section id='pricing'>
            <Pricings setOpen={setOpen} />
        </Section>

        <SectionAlternate>
           <BottomCTA setOpen={setOpen}/>
        </SectionAlternate>
        <div className={classes.toTopDiv} >
          <a href="/#top" >
            <Button className={classes.toTop}>
              Back to the top ⬆
            </Button>
          </a>
        </div>


    </div>
  );
};

export default ExpandfiHome;
