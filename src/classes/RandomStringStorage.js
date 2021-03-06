import AutogeneratedStorage from "./AutoGeneratedStorage";
import { generateLatinString } from "../util/generateString";

export default class RandomStringStorage extends AutogeneratedStorage {
  constructor(initial) {
    super(initial);
  }

  generate() {
    const storage = this.values;

    if (Object.keys(storage).length) {
      this.clean();
    }

    for (let i = 0; i < 10e5; i++) {
      const string = generateLatinString(100);
      const key = string[0];
      storage[key] ? storage[key].push(string) : (storage[key] = [string]);
    }

    return storage;
  }
}
