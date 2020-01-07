import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Login = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="temp-container">
      <h1>Login is currently not suport, but it will soon</h1>
      <p>We will let you kno</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Login
