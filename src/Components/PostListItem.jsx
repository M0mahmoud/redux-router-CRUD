import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Details from "../Routes/Details";
import Detail from "./Detail";

const PostListItem = ({ data, deletePosts, postDetail }) => {
  const navigate = useNavigate();
  const deleteHandler = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePosts(item.id);
      }
    });
  };

  const records = data.map((el, index) => (
    <tr key={index}>
      <td>{++index}</td>
      <td>{el.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Detail postDetail={postDetail} id={el.id} />
          <Button
            className="mx-1"
            variant="success"
            onClick={() => navigate(`post/${el.id}/edit`)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            className="mx-1"
            onClick={() => deleteHandler(el)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{records}</>;
};

export default PostListItem;
