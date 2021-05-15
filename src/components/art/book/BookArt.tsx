import { useState } from "react";
import { Button } from "react-bootstrap";
// @ts-ignore
import FlippingPages from "flipping-pages";
import "flipping-pages/FlippingPages.css";
import "./BookArt.scss";

const BookArt = () => {
  const [selected, handleSelectedChange] = useState(0);
  const totalPages = 4;

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
        <div className="book-page book-page-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
          nisl laoreet, vehicula nunc ac, molestie mauris. Mauris lectus ligula,
          dapibus non molestie fermentum, efficitur eu tellus. Ut tincidunt
          ullamcorper cursus. Donec iaculis a erat in aliquam. Fusce luctus
          mauris vitae vestibulum pharetra. Cras et bibendum felis, eget semper
          orci. Nulla scelerisque aliquam leo, non sollicitudin neque posuere
          nec. Fusce id sollicitudin turpis. Morbi luctus congue magna, sed
          cursus ex. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Etiam non ante et leo faucibus
          vulputate. Donec non feugiat lacus, et accumsan sem. Sed a ante
          mauris. Integer gravida tincidunt ligula quis fringilla. Nam diam mi,
          volutpat eget velit in, congue consequat purus.
        </div>
        <div className="book-page book-page-2">
          Proin non sollicitudin erat, dignissim lobortis neque. Duis non
          tristique ipsum. Aliquam pulvinar gravida blandit. Nulla vestibulum
          libero erat, a elementum est sagittis sit amet. Suspendisse hendrerit
          ante a augue vestibulum, sed rhoncus sem placerat. Phasellus
          sollicitudin, eros nec ultricies luctus, urna nisi rutrum massa, a
          pulvinar sem dui nec lorem. Maecenas aliquam nisl ut tortor efficitur,
          in malesuada leo sollicitudin. Fusce cursus sed quam ac pharetra. Ut
          ut dui dolor. Etiam pharetra magna hendrerit facilisis consectetur.
          Donec elementum fermentum neque, nec venenatis dui accumsan vel. Ut
          lectus leo, dictum quis ex at, dapibus dignissim velit. Fusce
          fringilla lacinia velit nec porta. Sed odio tortor, pharetra a lorem
          id, molestie sodales dui. Morbi malesuada nibh eu molestie suscipit.
          Aenean in sem sit amet velit finibus elementum.
        </div>
        <div className="book-page book-page-3">
          Pellentesque id dui quis velit pellentesque elementum nec ac neque.
          Fusce quis dapibus sapien, ut bibendum ligula. Ut vel arcu vel metus
          scelerisque malesuada vel quis felis. In faucibus ligula a blandit
          rhoncus. Donec at nisi sodales, rhoncus enim ac, consectetur erat.
          Mauris ipsum dolor, pulvinar in eros sit amet, malesuada egestas
          lectus. Duis dictum nisi ut ante consectetur, eget tincidunt elit
          eleifend. Sed hendrerit, nulla nec faucibus venenatis, quam mi
          convallis justo, id dictum odio libero non augue. Sed lacinia ligula
          vel congue semper. Fusce porta augue a ante rhoncus sagittis. Duis ac
          ultricies arcu.
        </div>
        <div className="book-page book-page-4">
          Sed at rutrum dui. Ut id tristique magna. Praesent libero dolor,
          iaculis et euismod id, faucibus non purus. Nullam ac arcu purus. Cras
          ultricies risus ut aliquam placerat. Sed vel efficitur mauris. Sed vel
          ante in quam hendrerit consequat at id dolor. Aliquam rutrum lorem sed
          nisl molestie, ut cursus nunc vulputate. Morbi congue ipsum erat, in
          vehicula justo dignissim nec. Suspendisse aliquam risus vel eros
          lobortis, sed condimentum sem vehicula. Nunc molestie nisl id turpis
          rutrum sollicitudin.
        </div>
      </FlippingPages>
      {/* Buttons are required for keyboard navigation */}
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
