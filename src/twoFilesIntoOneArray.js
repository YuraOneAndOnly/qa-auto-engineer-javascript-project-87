export default function twoFilesToOneArray(json1, json2) {
  const sumArray = [];
  Object.entries(json1).map((pair) => sumArray.push(pair));
  Object.entries(json2).map((pair) => sumArray.push(pair));
  sumArray.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });
  return sumArray;
}
