interface IChapter {
  ch: string;
  title: string;
  page: number;
}

export const BOOK_TITLE = "Vivi is Human";
export const AUTHOR = "Kevin Saephanh";

// Array of chapters for table of contents
export const contents: IChapter[] = [
  {
    ch: "I",
    title: "Introduction",
    page: 3,
  },
  {
    ch: "II",
    title: "Vivi's Purpose",
    page: 24,
  },
  {
    ch: "III",
    title: "The Other Mages",
    page: 57,
  },
  {
    ch: "IV",
    title: "Vivi's Plight",
    page: 74,
  },
  {
    ch: "V",
    title: "Maybe we don't Exist",
    page: 101,
  },
  {
    ch: "VI",
    title: "Proving Your Existence",
    page: 125,
  },
  {
    ch: "VII",
    title: "Accepting the Absurd",
    page: 151,
  },
  {
    ch: "VIII",
    title: "You Are Not Alone",
    page: 177,
  },
  {
    ch: "IX",
    title: "A New Chapter",
    page: 204,
  },
];
