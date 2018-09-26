import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import {
  CvThemeContext,
  CvThemeProvider
} from '../contexts/CvThemeContext'

// import { Dump } from '../util/helpers'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Education from '../components/Education'
import ThemeSelect from '../components/ThemeSelect'

import { media } from '../theme/globalStyle'

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . a a a a . .'
    '. . s s s s . .'
    '. . w w w w . .'
    '. . e e e e . .';
  background: ${props => props.theme.background};
  ${media.monitor`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . a a a a . .'
      '. . s s s s . .'
      '. . w w w w . .'
      '. . e e e e . .';
    /* background: goldenrod; */
    background: linear-gradient(
      0.25turn, 
      darkslateblue, 
      ${props => props.theme.secondary});
  `};
  ${media.giant`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . a a a a . .'
      '. . s s s s . .'
      '. . w w w w . .'
      '. . e e e e . .';
    /* background: goldenrod; */
    background: linear-gradient(
      0.25turn, 
      goldenrod, 
      ${props => props.theme.secondary});
  `};
  ${media.desktop`
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      '. . a a a a . .'
      '. . s s s s . .'
      '. . w w w w . .'
      '. . e e e e . .';
    /* background: dodgerblue; */
    background: linear-gradient(
      0.25turn, 
      dodgerblue, 
      ${props => props.theme.secondary});
  `};
  ${media.tablet`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'a a a a a a'
      's s s s s s'
      'w w w w w w'
      'e e e e e e';
    /* background: mediumseagreen; */
    background: linear-gradient(
      0.25turn, 
      mediumseagreen, 
      ${props => props.theme.secondary});
  `};
  ${media.phone`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      'a a a a'
      's s s s'
      'w w w w'
      'e e e e';
    /* background: palevioletred; */
    background: linear-gradient(
      0.25turn, 
      palevioletred, 
      ${props => props.theme.secondary});
  `};
`
const ThemeSelectWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`
class IndexPage extends React.Component {
  // const IndexPage = props => {

  state = {
    apiUrl: 'https://cvjson.now.sh/'
  }

  render() {
    const {
      basics,
      work,
      skills,
      education
    } = this.props.data.allCv.edges[0].node
    return (
      <CvThemeProvider>
        <CvThemeContext.Consumer>
          {({ theme }) => (
            <ThemeProvider theme={theme}>
              <PageContainer>
                {/* <Dump
                  props={basics}
                  props={props.data.allCv.edges[0].node}
                  pageResources={props.pageResources}
                /> */}
                <About aboutData={basics} />
                <Skills skillsData={skills} />
                <Work workData={work} />
                <Education educationData={education} />
                <ThemeSelectWrapper>
                  <ThemeSelect
                    handleThemeChange={this.handleThemeChange}
                  />
                </ThemeSelectWrapper>
              </PageContainer>
            </ThemeProvider>
          )}
        </CvThemeContext.Consumer>
      </CvThemeProvider>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
  basics: PropTypes.object,
  work: PropTypes.object,
  skills: PropTypes.object,
  education: PropTypes.object
}

export default IndexPage

export const query = graphql`
  query CvQuery {
    cvDataCv {
      basics {
        name
        label
        picture
        email
        phone
        website
        summary
        location {
          address
          postalCode
          city
          countryCode
          region
        }
        profiles {
          network
          username
          url
        }
      }
      work {
        company
        position
        website
        startDate
        endDate
        summary
      }
      education {
        institution
        area
        studyType
        startDate
        endDate
        gpa
      }
      publications {
        name
        publisher
        releaseDate
        website
        summary
      }
      skills {
        name
        level
        keywords
      }
      languages {
        language
        fluency
      }
      references {
        name
        reference
      }
    }
  }
`
