import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  // Это сделано для тестов
  const isAppStructure = post.postElement !== undefined;

  // Это сделано для тестов тоже
  const user = isAppStructure ? post.user : post.user;
  const postElement = isAppStructure ? post.postElement : post;
  const comments = isAppStructure ? post.comments : post.comments;

  const objToCommentList = {
    commentsElements: comments,
    postId: postElement.id,
  };

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{postElement.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{postElement.body}</p>

      {comments ? (
        <CommentList comments={objToCommentList} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
