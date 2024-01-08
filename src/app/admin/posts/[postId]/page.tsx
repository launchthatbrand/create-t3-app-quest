import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

function PostPage({ params: { postId } }: Props) {
  return (
    <>
      <div>Post Page</div>
      <div>{postId}</div>
    </>
  );
}

export default PostPage;
