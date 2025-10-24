import { PostInfo } from '../PostInfo';

function getUserById(users, userId) {
  return users.find(user => user.id === userId);
}

export const PostList = ({ users, posts, comments }) => {

  return (
    <div className="PostList">
      {posts.map(post => {
        const user = getUserById(users, post.userId);
        const postObj = {
          postElement: post,
          user,
          comments,
        };

        return <PostInfo post={postObj} key={post.id} />;
      })}
    </div>
  );
};
