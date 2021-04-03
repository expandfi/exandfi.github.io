import React from 'react';
import { makeStyles,Button, Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Faq } from './components';
import {
  faq
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

const FaqPage = ({ open, setOpen, themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Section>
        <Faq data={faq}/>
      </Section>
    </div>
  );
};

export default FaqPage;
