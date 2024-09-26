import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Survey from './Survey'



function App() {

  return (
    <>
      <form action="/my-handling-form-page" method="post">
        <p>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name" onChange={(e) => handleChanges(e)} />
        </p>
        <p>
          <label for="mail">Email:</label>
          <input type="email" id="mail" name="user_email" />
        </p>
        <p>
          <label for="msg">Message:</label>
          <textarea id="msg" name="user_message"></textarea>
        </p>
      </form>
      <p className="button">
        <button type="submit">Send</button>
      </p>
      {/* <Messages /> */}
    </>
  )
}

export default App
