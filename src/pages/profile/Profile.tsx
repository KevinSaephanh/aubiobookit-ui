import { FC, useContext } from "react";
import { Card, Table } from "react-bootstrap";
import { AuthContext } from "../../store/providers/AuthProvider";
import "./Profile.scss";

const fakeBooks = [
  { title: "Hello World1" },
  { title: "Hello World2" },
  { title: "Hello World3" },
  { title: "Hello World4" },
];

const Profile: FC = () => {
  const auth = useContext(AuthContext);

  console.log(auth);

  const getBooks = () => {
    return fakeBooks.map((book, key) => {
      return (
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{book.title}</td>
          <td>
            <div>
              <i className="fas fa-headphones" />/
              <i className="fas fa-book" />
            </div>
          </td>
          <td>
            <div>
              <i className="fas fa-headphones" />/
              <i className="fas fa-book" />
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="main-content profile">
      <section className="profile-left">
        <Card>
          <Card.Img variant="top" src={auth.authState.user.profilePic} />
          <Card.Body>
            <Card.Title>{auth.authState.user.username}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </section>
      <section className="profile-right">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>PDF/Audiobook</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>{getBooks()}</tbody>
        </Table>
      </section>
    </div>
  );
};

export default Profile;
