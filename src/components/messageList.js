import PropTypes from "prop-types"
import React from "react"


const DUMMY_DATA = [
  {
    senderID: 'Simanga',
    text: 'Hey, How are you'
  },

  {
    senderID: 'JohnDoe',
    text: 'I am fine, How about you'
  },

  {
    senderID: 'Simanga',
    text: 'I am always fine thats nice to final talk to you'
  },

  {
    senderID: 'CheryClement',
    text: 'You guys are so cute'
  }

]

const MessageList = ({ siteTitle }) => (
  <div className="message-list">
    <p>hi</p>
    {DUMMY_DATA.map((person, index) => {
      return (
        <div key={index} className="message-person">
          <div className="message-name"> {person.senderID} </div>
          <div className="message-text"> {person.text} </div>
        </div>)
    }
    )}
  </div>
)



export default MessageList


