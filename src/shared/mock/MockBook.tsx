import IBook from "../models/IBook";

export const mockBook: IBook = {
  pdf: new File(["asdf"], "fdsf"),
  audiobook: new File(["avbdf"], "eewq"),
  lastReadTime: 12.22,
};
