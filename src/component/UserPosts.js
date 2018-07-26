import React from 'react';
import {connect} from 'react-redux';

class UserPosts extends React.Component {

  render(){
    const { user } = this.props
    const heightChecker = user.posts.length.toString();
    return(
       <div className="userPosts">
              {user.posts &&
                user.posts.reverse() &&
                user.posts.map((aPost, i) => {
                  return (
                    <div key={user.id + i} style={{ height: heightChecker === '1' && '120px'}}className="singlePost">

                      <div style={{marginTop: heightChecker === '2' && '60px'}} className="postsaying postContent">

                        <p>
                          {
                            `"${aPost.content
                              ? aPost.content
                              : "The content is empty"}"`


                          }
                        </p>

                      </div>

                      <div className="poster postContent">
                        <h6>by</h6>
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
