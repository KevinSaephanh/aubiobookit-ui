import { FC } from "react";
import { Card } from "react-bootstrap";
import BookArt from "../../components/art/book/BookArt";
import { features } from "./Features";
import "./Home.scss";

const Home: FC = () => {
  const getFeatures = () => {
    // Columns of items
    // Picture, title, description
    return (
      <ul>
        {features.map((feature, key) => {
          return (
            <Card key={key}>
              <Card.Img variant="top" src={feature.image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="main-content home">
      <section>
        <BookArt />
      </section>
      <section className="features">
        <h3>Awesome Features Await!</h3>
        {getFeatures()}
      </section>
    </div>
  );
};

export default Home;
