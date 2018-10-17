import React, { Component } from 'react'
import { MDXProvider } from "@mdx-js/tag"

class PostsLayout extends Component {
  render() {
    console.log(this.props.children); // undefined

    return (
      <MDXProvider components={{}}>
        <>
          <h1>This is inside the layout</h1>
          Now for the children?...
          <hr />
          <div>{ this.props.children }</div>
        </>
      </MDXProvider>
    )
  }
}

export default PostsLayout
