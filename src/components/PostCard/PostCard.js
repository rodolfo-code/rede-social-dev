import React from 'react';

function PostCard(props) {
  // const { post } = props.children;
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
}

export default PostCard;
