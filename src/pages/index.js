import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import Hero from '../components/Hero/hero'
import styles from './index.module.scss'
import ProjectBtn from '../components/UI/buttons/projectBtn'

const IndexPage = () => (
  <main>
    <Hero />
    <Container>
      <section className={styles.featured} id="featured">
        <div className={styles.featuredContent}>
          <span>featured content</span>
          <h2>My projects</h2>
          <p>Here is a few examples of my front-end projects</p>
        </div>
        <div className={styles.projects}>
          <div className={styles.project}>
            <img
              src="img/number-guesser.png"
              alt="screenshot of number guesser project"
            />
            <div className={styles.description}>
              <h3>Number guesser</h3>
              <p>Number guessing game.</p>
              <p>
                <ProjectBtn>
                  <a
                    href="https://dimafeoktistov.github.io/number-guesser/"
                    target="_blank"
                  >
                    Go!
                  </a>
                </ProjectBtn>
                <Link className={styles.projectBtn} to="page-2">
                  More info
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.project}>
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
                className={styles.projectBtn}
              >
                Go!
              </a>
            </p>
          </div>
          <div className={styles.project}>
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
                className={styles.projectBtn}
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
