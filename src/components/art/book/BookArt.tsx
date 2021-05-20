import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AUTHOR, BOOK_TITLE, contents } from "./BookInfo";
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
    <div className="book-art">
      <FlippingPages
        className="book-pages"
        direction="horizontal"
        selected={selected}
        onSelectedChange={handleSelectedChange}
        touch-action="none"
      >
        <div className="book-page-wrapper">
          <section className="book-page" />
          <section className="book-page title-page">
            <h4>{BOOK_TITLE}</h4>
            <h5>By {AUTHOR}</h5>
          </section>
        </div>
        <div className="book-page-wrapper">
          <section className="book-page contents">
            <h5>CONTENTS</h5>
            <ul className="contents-list">
              <Table responsive>
                <tbody>
                  {contents.map((chapter, key) => {
                    return (
                      <tr className="content-item" key={key}>
                        <td className="content-item-chapter">{chapter.ch}</td>
                        <td className="content-item-title">{chapter.title}</td>
                        <td className="content-item-page">{chapter.page}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </ul>
          </section>
          <section className="book-page">
            <div className="chapter-header">
              <h5>{contents[0].ch}</h5>
              <h6>{contents[0].title}</h6>
            </div>
            <p>
              &emsp; Sed at rutrum dui. Ut id tristique magna. Praesent libero
              dolor, iaculis et euismod id, faucibus non purus. Nullam ac arcu
              purus. Cras ultricies risus ut aliquam placerat. Sed vel efficitur
              mauris. Sed vel ante in quam hendrerit consequat at id dolor.
              <br />
              &emsp; Nam lorem elit, sagittis pellentesque urna nec, malesuada
              dictum ex. Curabitur in lectus ullamcorper nibh rhoncus porta.
              Proin eu ultrices enim. Pellentesque eget facilisis urna. Proin
              ultricies viverra odio, quis ullamcorper enim accumsan sed quam
              hendrerit.
            </p>
            <span>3</span>
          </section>
        </div>
        <div className="book-page-wrapper">
          <section className="book-page">
            <p>
              &emsp; Pellentesque id dui quis velit pellentesque elementum nec
              ac neque. Fusce quis dapibus sapien, ut bibendum ligula. Ut vel
              arcu vel metus scelerisque malesuada vel quis felis. In faucibus
              ligula a blandit rhoncus. Donec at nisi sodales, rhoncus enim ac,
              consectetur erat. Mauris ipsum dolor, pulvinar in eros sit amet,
              malesuada egestas lectus.
              <br />
              &emsp; Sed at rutrum dui. Ut id tristique magna. Praesent libero
              dolor, iaculis et euismod id, faucibus non purus. Nullam ac arcu
              purus. Sed vel efficitur mauris. Sed vel ante in quam hendrerit
              consequat at id dolor. Aliquam rutrum lorem sed nisl molestie, ut
              cursus nunc vulputate. Morbi congue ipsum erat, in vehicula justo
              dignissim nec.
            </p>
            <span>4</span>
          </section>
          <section className="book-page">
            <p>
              &emsp; Sed at rutrum dui. Ut id tristique magna. Praesent libero
              dolor, iaculis et euismod id, faucibus non purus. Nullam ac arcu
              purus. Cras ultricies risus ut aliquam placerat. Sed vel efficitur
              mauris. Sed vel ante in quam hendrerit consequat at id dolor.
              Aliquam rutrum lorem sed nisl molestie, ut cursus nunc vulputate.
              Morbi congue ipsum erat, in vehicula justo dignissim nec.
              <br />
              &emsp; Nunc euismod nisi ut vulputate pulvinar. Vivamus consequat
              sed metus vitae suscipit. Vivamus non orci sit amet purus
              porttitor elementum non nec arcu. Curabitur placerat consequat
              justo. Curabitur vel eros vestibulum, efficitur arcu tempor,
              dictum lectus.
            </p>
            <span>5</span>
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
