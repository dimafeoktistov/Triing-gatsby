import React from 'react'
import Container from '../components/container'
import Hero from '../components/Hero/hero'
import Projects from '../components/Projects/Projects'

const IndexPage = () => (
  <main>
    <Hero />
    <Container>
      <Projects />
    </Container>
  </main>
)

export default IndexPage
