let inputString = "";
let currentLine = 0;
process.stdin.on("data", (data) => {
  inputString += data;
});
process.stdin.on("end", function () {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());
  main();
});
function readLine() {
  return inputString[currentLine++];
}

// utils
const MOD = 1e9 + 7;
const mod = (n) => ((n % MOD) + MOD) % MOD;
const add = (a, b) => mod(mod(a) + mod(b));
function mul() {
  for (var a = arguments, r = a[0], i = a.length; --i; )
    r = ((((r >> 16) * a[i]) % MOD) * 65536 + (r & 65535) * a[i]) % MOD;
  return r;
}
function inv(b) {
  for (var a = MOD, u = 0, v = 1, t; b; v = t)
    (t = (a / b) | 0), (a -= t * b), (u -= t * v), (t = a), (a = b), (b = t), (t = u), (u = v);
  u %= MOD;
  return u < 0 ? u + MOD : u;
}

function main() {}
