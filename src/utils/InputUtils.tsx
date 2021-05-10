// @ts-ignore
import Filter from "bad-words";

export default class InputUtils {
  static readonly hasBadWord = (value: string): boolean => {
    const filter = new Filter({ regex: /\*|\.|$/gi });
    return filter.isProfane(value);
  };
}
