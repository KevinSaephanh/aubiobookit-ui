import { FC } from "react";
import BookArt from "../../components/art/book/BookArt";
import "./Home.scss";

const Home: FC = () => {
  const getFeatures = () => {
    // Columns of items
    // Picture, title, description
    return <ul>asd</ul>;
  };

  return (
    <div className="main-content home">
      <section>
        {/* Create a card (pdf book in front and audiobook in back)
        Or create a book that flips pages */}
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
