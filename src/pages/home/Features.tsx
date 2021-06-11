import Books from "../../assets/books.png";
import CatHeadphones from "../../assets/catHeadphones.png";

interface IFeature {
  image: string;
  title: string;
  desc: string;
}

export const features: IFeature[] = [
  {
    image: Books,
    title: "Personal eBook Storage",
    desc: "Save and access all of your eBooks in a personal storage.",
  },
  {
    image: CatHeadphones,
    title: "eBook to Audiobook Conversion",
    desc: "Freely convert any eBook of your choice to audiobook.",
  },
  {
    image: CatHeadphones,
    title: "Audiobook Listening Session",
    desc: "Listen to any one of your audiobooks and save your progress.",
  },
];
