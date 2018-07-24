import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

  render(){

    return(
        <div>

            <Link to="/"><h2>BH</h2></Link>
            <Link to="/users"><h2>Big Humans</h2></Link>
            <Link to="/posts"><h2>Big Thoughts</h2></Link>

        </div>
    )
  }
}
