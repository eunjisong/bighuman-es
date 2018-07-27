import React from 'react';
import {connect} from 'react-redux';

class UserPosts extends React.Component {

  render(){
    const { user } = this.props


    return(

       <div className="userPosts">

              {
               user.posts.length > 0 ?
                user.posts.reverse() &&
                user.posts.map((aPost, i) => {
                  return (
                    <div key={user.id + i} className="singlePost">

                      <div className="postsaying postContent">

                        <p>
                          {
                            `" ${aPost.content
                              ? aPost.content
                              : "The content is empty"} "`


                          }
                        </p>

                      </div>

                      <div className="who postContent">
                        <p className="poster">by</p>
                        <p className="poster">{aPost.poster}</p>
                      </div>
                    </div>
                  );
                })
                : <div className="noPost"><p>No posts for {user.name.split(' ')[0]}</p></div>
              }
            </div>

    )
  }
}

export default connect()(UserPosts)
