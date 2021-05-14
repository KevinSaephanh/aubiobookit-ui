import { FC } from "react";
import HTMLFlipBook from "react-pageflip";

const Home: FC = () => {
  const getMyBook = () => {};

  const getFeatures = () => {
    // Columns of items
    // Picture, title, description
    return <ul>asd</ul>;
  };

  return (
    <div>
      <section>
        {/* Create a card (pdf book in front and audiobook in back)
        Or create a book that flips pages */}
      </section>
      <section className="features">
        <h3>Awesome Features Await You!</h3>
        {getFeatures()}
      </section>
    </div>
  );
};

export default Home;
