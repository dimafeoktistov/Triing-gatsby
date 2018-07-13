import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import Hero from '../components/Hero/hero'

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
    <Container>
      <section class="featured" id="featured">
        <div class="featured-content">
          <span>featured content</span>
          <h2>My projects</h2>
          <p>Here is a few examples of my front-end projects</p>
        </div>
        <div class="projects">
          <div class="project">
            <img
              src="img/number-guesser.png"
              alt="screenshot of number guesser project"
            />
            <h3>Number guesser</h3>
            <p>Number guessing game.</p>
            <p>
              <a
                href="https://dimafeoktistov.github.io/number-guesser/"
                target="_blank"
                class="project-btn"
              >
                Go!
              </a>
            </p>
          </div>
          <div class="project">
            <img
              src="img/loan-calculator.png"
              alt="screenshot of loan calculator project"
            />
            <h3>Loan calculator</h3>
            <p>Calculator of loan percentages.</p>
            <p>
              <a
                href="https://dimafeoktistov.github.io/loancalculator/"
                target="_blank"
                class="project-btn"
              >
                Go!
              </a>
            </p>
          </div>
          <div class="project">
            <img
              src="img/chuck-norris.png"
              alt="screenshot of Chuck Norris joke project"
            />
            <h3>Chuck Norris Joke Generator</h3>
            <p>Generator of the jokes about Chuck Norris with AJAX api.</p>
            <p>
              <a
                href="https://dimafeoktistov.github.io/chucknorris/"
                target="_blank"
                class="project-btn"
              >
                Go!
              </a>
            </p>
          </div>
        </div>
      </section>
    </Container>
  </main>
)

export default IndexPage
