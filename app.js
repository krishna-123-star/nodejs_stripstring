const stripCharacters = (str, charsToRemove) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (!charsToRemove.includes(str[i])) {
        result += str[i];
      }
    }
    return result;
  };
  
  const inputString = "Krishna";
  const charsToRemove = "aeiou";
  
  const strip = stripCharacters(inputString, charsToRemove);
  console.log(`Stripped string: ${strip}`);
  