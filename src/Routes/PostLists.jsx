import React, { memo } from "react";
import { Table } from "react-bootstrap";

import PostListItem from "../Components/PostListItem";

const PostLists = memo(({ data, deletePosts ,updatePost }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostListItem data={data} deletePosts={deletePosts} updatePost={updatePost} />
      </tbody>
    </Table>
  );
});

export default PostLists;
