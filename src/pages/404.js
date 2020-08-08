import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotF from "../images/404.png"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{paddingBottom: '2em'}}>
      <img src={NotF} width="55%"/>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/" className="back">Go Back</Link>
      <br />
    </div>
  </Layout>
)

export default NotFoundPage
