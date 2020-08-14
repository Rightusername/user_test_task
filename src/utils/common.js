
export function escapeRegExp(string) {
  string = string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return string;
}

export function generateID() {
  let str =
    Math.random()
      .toString(36)
      .substr(2, 9) +
    Date.now()
      .toString(36)
      .substr(3);
  for (let i = 0; i < str.length; i++) {
    let n = Math.random();
    if (n > 0.5) {
      str = str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1);
    }
  }
  return str;
}
