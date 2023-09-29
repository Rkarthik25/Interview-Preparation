let str = "hi janani this is abha";

let result =str.split(" ")

.map(word => [...word]
    .reverse()
    .join(''))
    .join(' ');

console.log(result)