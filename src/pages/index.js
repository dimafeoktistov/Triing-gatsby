import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import Hero from '../components/Hero/hero'
import Aux from '../HOCS/Aux.js'

const IndexPage = () => (
  <main>
    <Hero />
    <Container>
      <div>
        <h1>Richard Hamming on Luck</h1>
        <div>
          <p>
            From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
              You and Your Research
            </a>”.
          </p>
          <blockquote>
            <p>
              There is indeed an element of luck, and no, there isn’t. The
              prepared mind sooner or later finds something important and does
              it. So yes, it is luck.
              <em>
                The particular thing you do is luck, but that you do something
                is not.
              </em>
            </p>
          </blockquote>
        </div>
        <p>Posted April 09, 2011</p>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </main>
)

export default IndexPage
