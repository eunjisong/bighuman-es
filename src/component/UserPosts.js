import React from 'react';
import {connect} from 'react-redux';

class UserPosts extends React.Component {

  render(){
    const { user } = this.props
    return(
       <div className="allPosts">
              {user.posts &&
                user.posts.map(aPost => {
                  return (
                    <div className="singlePost">
                      <div>
                        <h5>content:</h5>
                        <p>
                          {
                            aPost.content
                              ? aPost.content
                              : "The content is empty"
                          }
                        </p>
                      </div>
                      <div>
                        <h5>poster:</h5>
                        <p>{aPost.poster}</p>
                      </div>
                    </div>
                  );
                })}
            </div>

    )
  }
}

export default connect()(UserPosts)
