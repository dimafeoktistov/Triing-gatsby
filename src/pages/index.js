import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import Hero from '../components/Hero/hero'

const IndexPage = () => (
  <main>
    <Hero />
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
