import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { contents } from "./BookInfo";
// @ts-ignore
import FlippingPages from "flipping-pages";
import "flipping-pages/FlippingPages.css";
import "./BookArt.scss";

const BookArt = () => {
  const [selected, handleSelectedChange] = useState(0);
  const totalPages = 3;

  const previous = () => {
    handleSelectedChange((selected) => selected - 1);
  };

  const next = () => {
    handleSelectedChange((selected) => selected + 1);
  };

  return (
    <div>
      <FlippingPages
        className="book-pages"
        direction="horizontal"
        selected={selected}
        onSelectedChange={handleSelectedChange}
        touch-action="none"
      >
        <div className="book-page-wrapper">
          <section className="book-page" />
          <section className="book-page">
            <h3>Title Here</h3>
            <h5>By John Doe</h5>
          </section>
        </div>
        <div className="book-page-wrapper">
          <section className="book-page contents">
            {/* <h5>CONTENTS</h5> */}
            <ul className="contents-list">
              {contents.map((chapter, key) => {
                return (
                  <Row key={key} className="content-item">
                    <Col>{chapter.ch}</Col>
                    <Col>{chapter.title}</Col>
                    <Col>{chapter.page}</Col>
                  </Row>
                );
              })}
            </ul>
          </section>
          <section className="book-page">
            <p>
              Sed at rutrum dui. Ut id tristique magna. Praesent libero dolor,
              iaculis et euismod id, faucibus non purus. Nullam ac arcu purus.
              Cras ultricies risus ut aliquam placerat. Sed vel efficitur
              mauris. Sed vel ante in quam hendrerit consequat at id dolor.
              Aliquam rutrum lorem sed nisl molestie, ut cursus nunc vulputate.
              Morbi congue ipsum erat, in vehicula justo dignissim nec.
              Suspendisse aliquam risus vel eros lobortis, sed condimentum sem
              vehicula. Nunc molestie nisl id turpis rutrum sollicitudin.
            </p>
          </section>
        </div>
        <div className="book-page-wrapper">
          <section className="book-page">
            <p>
              Pellentesque id dui quis velit pellentesque elementum nec ac
              neque. Fusce quis dapibus sapien, ut bibendum ligula. Ut vel arcu
              vel metus scelerisque malesuada vel quis felis. In faucibus ligula
              a blandit rhoncus. Donec at nisi sodales, rhoncus enim ac,
              consectetur erat. Mauris ipsum dolor, pulvinar in eros sit amet,
              malesuada egestas lectus. Duis dictum nisi ut ante consectetur,
              eget tincidunt elit eleifend. Sed hendrerit, nulla nec faucibus
              venenatis, quam mi convallis justo, id dictum odio libero non
              augue. Sed lacinia ligula vel congue semper. Fusce porta augue a
              ante rhoncus sagittis. Duis ac ultricies arcu.
            </p>
          </section>
          <section className="book-page">
            <p>
              Sed at rutrum dui. Ut id tristique magna. Praesent libero dolor,
              iaculis et euismod id, faucibus non purus. Nullam ac arcu purus.
              Cras ultricies risus ut aliquam placerat. Sed vel efficitur
              mauris. Sed vel ante in quam hendrerit consequat at id dolor.
              Aliquam rutrum lorem sed nisl molestie, ut cursus nunc vulputate.
              Morbi congue ipsum erat, in vehicula justo dignissim nec.
              Suspendisse aliquam risus vel eros lobortis, sed condimentum sem
              vehicula. Nunc molestie nisl id turpis rutrum sollicitudin.
              <strong>The End</strong>
            </p>
          </section>
        </div>
      </FlippingPages>
      <Button variant="success" onClick={previous} disabled={!selected}>
        Previous
      </Button>
      <Button
        variant="success"
        onClick={next}
        disabled={selected + 1 === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default BookArt;
