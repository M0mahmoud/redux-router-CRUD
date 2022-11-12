import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostListItem = ({ data, deletePosts , updatePost }) => {
  const navigate= useNavigate()
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
          <Button variant="success" onClick={()=>navigate(`post/${el.id}/edit`)}>Edit</Button>
          <Button variant="danger" onClick={() => deleteHandler(el)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{records}</>;
};

export default PostListItem;
