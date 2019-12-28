import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Import componet
import MessageList from '../components/messageList'

const SecondPage = () => (
  <Layout>
    <div className="chat-container">
      <div className="side-bar">
        <p>Hello, this is side bar</p>
      </div>
      <MessageList />
      <div className="sendMessageForm">
        <p>Send Message form</p>
      </div>
    </div>
  </Layout>
)

export default SecondPage