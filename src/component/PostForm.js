import React from 'react';
import { connect } from 'react-redux';
import { postNewPost } from '../store'
class PostFrom extends React.Component {
  constructor(){
    super()
    this.state = {
      content: '',
      poster: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){

    this.setState({[event.target.name]: event.target.value})

  }

  handleSubmit(event){
    const id = this.props.user.id
    this.props.postNewPost(id, this.state)
    event.preventDefault()
  }

  render(){
    return(
       <form onSubmit={this.handleSubmit}>
          <label>
            content:
          <textarea type="textarea" onChange={this.handleChange} name="content"/>
          </label>

          <label>
            poster:
          <input type="text" onChange={this.handleChange} name="poster"/>
          </label>


          <input type="submit" value="Submit"/>


       </form>

    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    postNewPost: (id, item) => dispatch(postNewPost(id, item))
  }
}

export default connect(null, mapDispatch)(PostFrom)
