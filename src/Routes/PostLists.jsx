import React, { memo } from "react";
import { Table } from "react-bootstrap";

import PostListItem from "../Components/PostListItem";

const PostLists = memo(({ data, deletePosts, updatePost, postDetail }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{ width: "5%" }}>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}>Options</th>
        </tr>
      </thead>
      <tbody>
        <PostListItem
          data={data}
          deletePosts={deletePosts}
          updatePost={updatePost}
          postDetail={postDetail}
        />
      </tbody>
    </Table>
  );
});

export default PostLists;
