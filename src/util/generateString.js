const getRandomIntBetween = (from, to) => {
  return Math.floor(Math.random() * (from - to + 1) + to);
};

const generateCharSqeuenceFromCharCodes = (from, to) => {
  const sequence = [];
  for (let i = from; i <= to; i++) {
    sequence.push(String.fromCharCode(i));
  }
  return sequence;
};

const generateAlphabet = (...charCodes) => {
  return charCodes.reduce((acc, codeCollection) => {
    const [from, to] = codeCollection;
    acc.push(...generateCharSqeuenceFromCharCodes(from, to));
    return acc;
  }, []);
};

const useAlphabetForStringCreation = (alphabet) => {
  const [alphabetStart, alphabetEnd] = [0, alphabet.length - 1];
  return (length) => {
    let string = "";
    for (let i = 0; i < length; i++) {
      string += alphabet[getRandomIntBetween(alphabetStart, alphabetEnd)];
    }
    return string;
  };
};

const latinCharCodes = {
  uppercase: [64, 90],
  lowercase: [97, 122],
};

const latinAphabet = generateAlphabet(
  latinCharCodes.uppercase,
  latinCharCodes.lowercase
);

export const generateLatinString = useAlphabetForStringCreation(latinAphabet);
