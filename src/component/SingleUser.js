import React from "react";
import { connect } from "react-redux";
import { PostForm, UserPosts, UserList } from "./index";


class SingleUser extends React.Component {

  render() {
    const { users, id } = this.props;
    let user;

    for(var single in users){
      if(+users[single].id === +id) user = users[single]
    }

    return (
      <div>
        <div>
          {users &&
            user && (
              <div>

                {/* level 1 */}
                <div>
                <UserList id={user.id} users={users} />
                </div>

                {/* level 1 */}
                <div>


                  {/* level 2 */}
                  <div className="singleUserContainer">


                        {/* level 3 */}
                        <div className="identity">
                          <img src={user.image} alt={user.name} />
                          <h2>{user.name}</h2>
                        </div>


                        {/* level 3 */}
                        <div className="identitySide">
                          <PostForm users={users} user={user} />
                          <UserPosts user={user} />
                        </div>


                    </div>
                  </div>
                </div>

            )}
        </div>

        {/* Single User Rendering */}
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    users: state.users.data,
    id: id
  };
};

export default connect(mapState)(SingleUser);
