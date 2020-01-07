import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Application = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="temp-container">
      <h1>Thank your for your intrest</h1>
      <p>We will take application soon</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Application
