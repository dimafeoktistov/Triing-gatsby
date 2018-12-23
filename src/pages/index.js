import React from 'react'
import Container from '../components/container'
import Hero from '../components/Hero/hero'
import Projects from '../components/Projects/Projects'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <main>
      <Hero />
      <Container>
        <Projects />
      </Container>
    </main>
  </Layout>
)

export default IndexPage
