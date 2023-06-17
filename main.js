let str = `
010-1234-5678
test@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://www.omdbapi.com/?apikey=7035c60c&s
동해물과 백도산이 마르고 닳도록
d`

const regexp = /fox/gi
// console.log(regexp.test(str))
console.log(str.replace(regexp, 'aaa'))
str = str.replace(regexp, 'aaa')
console.log(str)

console.log(str.match(/\.$/gi))
console.log(str.match(/d$/g))
console.log(
  str.match(/^t/gmi)
)
console.log(
  str.match(/./g)
)
console.log(
  str.match(/h..p/g)
)
console.log(
  str.match(/fox|dog/)
)
console.log(
  str.match(/https?/g)
)
console.log(
  str.match(/d{2}/g)
)
console.log(
  str.match(/\b\w{2,3}\b/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)
console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)
)
console.log(
  str.match(/\d{1,}/g)
)
const h = `  the hello  world   !

`
console.log(
  h.match(/\s/g)
)
console.log(
  h.replace(/\s/g, '')
)
console.log(
  str.match(/(?<=@).{1,}/g)
)