import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

const delay = () => {
    return new Promise(resolve => {
        setTimeout(resolve('OK'), 1000);
    })
}

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => console.log(res.data))
      .then(() => history(0))
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "-10px ", bgcolor:"green", color:"white", }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "10px",bgcolor:"red", color:"white" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;