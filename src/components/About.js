import React from 'react'
import styled from 'styled-components'
import { ItemWrapper as IW } from './shared/ItemWrapper'
import { Heading } from './shared/Headings'
import { StyledLink as SL } from './shared/Links'

const AboutWrapper = IW.extend`
  grid-area: a;
`

const AboutNameLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'n n n p p'
    'l l l p p';
`

const AboutName = styled.p`
  grid-area: n;
  font-size: 3rem;
  margin: 1rem 0rem 0.1rem 0rem;
  padding: 1rem 0rem 0.1rem 0rem;
  font-family: ${props => props.theme.fontHeader};
`

const AboutLabel = styled.p`
  grid-area: l;
  font-size: 1.8rem;
  margin: 0.1rem 0rem 1rem 0rem;
  padding: 0.1rem 0rem 1rem 0rem;
`

const AboutImg = styled.img`
  grid-area: p;
  object-fit: cover;
  margin: 1rem;
  padding: 1rem;
  width: 60%;
  border-radius: 50%;
  background-image: url(${props => props.src};);
`

const EmailPhoneSiteWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'e p s';
`

const AboutEmail = SL.extend`
  grid-area: e;
`

const AboutPhone = SL.extend`
  grid-area: p;
`

const AboutWebsite = SL.extend`
  grid-area: s;
`

const AboutSummary = styled.div``

const About = props => {
  const {
    name,
    label,
    picture,
    email,
    phone,
    website,
    summary
  } = props.aboutData

  return (
    <AboutWrapper>
      <AboutNameLabel>
        <AboutName>{name}</AboutName>
        <AboutLabel>{label}</AboutLabel>
        <AboutImg src={picture} />
      </AboutNameLabel>
      <EmailPhoneSiteWrapper>
        <AboutEmail>{email}</AboutEmail>
        <AboutPhone>{phone}</AboutPhone>
        <AboutWebsite>{website}</AboutWebsite>
      </EmailPhoneSiteWrapper>
      <AboutSummary>{summary}</AboutSummary>
      {/* <Dump props={props} /> */}
    </AboutWrapper>
  )
}

export default About
