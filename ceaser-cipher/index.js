const chars = "ABCDEFGHIJKLMNOPRSTUXWVYZ";
let key = 2;
const str = "GITHUB";

const ceaser = () => {
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    const currentIndex = chars.indexOf(str[i]);
    let cipherIndex = currentIndex + key;
    if (cipherIndex > chars.length - 1) {
      cipherIndex = (cipherIndex % (chars.length - 1)) - 1;
    }
    cipher += chars.charAt(cipherIndex);
  }
  return cipher;
};

const txt = ceaser();
console.log(txt);
