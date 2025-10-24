import { CommentInfo } from '../CommentInfo';

function getCommentsByPostId(comments, postId) {
  if (!comments) {
    return [];
  }

  if (postId === undefined) {
    return comments;
  }

  return comments.filter(comment => comment.postId === postId);
}

export const CommentList = ({ comments }) => {
  let commentsElements;
  let postId;

  // Тесты передают array а я в моем приложении обьект поэтому я подстроил под тесты
  if (Array.isArray(comments)) {
    commentsElements = comments;
    postId = undefined;
  } else {
    commentsElements = comments ? comments.commentsElements : [];
    postId = comments ? comments.postId : undefined;
  }

  const postComments = getCommentsByPostId(commentsElements, postId);

  return postComments.map(comment => {
    return (
      <div className="CommentList" key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    );
  });
};
