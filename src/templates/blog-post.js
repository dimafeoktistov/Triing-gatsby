import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

// import '../css/blog-post.css'; // make it pretty!

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`Feoktistov D.S. - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
