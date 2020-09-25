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
const sub = (a, b) => mod(mod(a) - mod(b));
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
function pow(base, n) {
  if (n === 0) return 1;
  let p = pow(base, Math.floor(n / 2));
  let res = mul(mod(p), mod(p));
  if (n % 2 === 1) res = mul(mod(res), base);
  return res;
}
function highestOneBit(i) {
  i |= i >> 1;
  i |= i >> 2;
  i |= i >> 4;
  i |= i >> 8;
  i |= i >> 16;
  return i - (i >>> 1);
}
function permutation(arr, len, store = "", permutations = []) {
  if (store.length === len) {
    permutations.push(store);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    const newArr = [...arr];
    const newChar = newArr.splice(i, 1);
    permutation(newArr, len, store.concat(newChar), permutations);
  }
  return permutations;
}

function main() {
  console.log(permutation([1, 2, 3], 2));
}
