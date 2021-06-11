import { FC } from "react";
import { Card } from "react-bootstrap";
import BookArt from "../../components/art/book/BookArt";
import { features } from "./Features";
import "./Home.scss";

const Home: FC = () => {
  const getFeatures = () => {
    return (
      <ul>
        {features.map((feature, key) => {
          return (
            <Card key={key}>
              <Card.Img variant="top" src={feature.image} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.desc}</Card.Text>
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
