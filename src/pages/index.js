import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BodyContent from '../components/bodyContent'

import Banner from '../components/banner'

const IndexPage = () => (
  <Layout>
    <Banner />
    <BodyContent />

  </Layout>
)

export default IndexPage
