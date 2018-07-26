import React from 'react';
import { Link } from 'react-router-dom'
export default class Home extends React.Component {

  render(){
    return(
      <div className="home">
        <Link to="/users"><img src="http://www.bighuman.com/images/bh-logo-black.svg" alt="logo" /></Link>

      </div>
    )
  }
}
