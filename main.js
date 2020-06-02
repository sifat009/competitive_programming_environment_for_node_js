process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString = "";
let currentLine = 0;
process.stdin.on("data", (inputStd) => {
  inputString += inputStd;
});
process.stdin.on("end", function () {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => {
      return str.trim();
    });
  main();
});
function readLine() {
  return inputString[currentLine++];
}
function main() {
  let number = +readLine();
  console.log(number);
}
