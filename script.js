// Question 01
function numStr(n) {
    var str = n.toString()
    return str
}
var NumberToBeString = prompt('Please enter number to be string')
document.write(`<h2>'${numStr(NumberToBeString)}'</h2>`)
// Question 02
function sumArr(arr) {
    var sum = 0
    for (i in arr){
        sum += arr[i]
    }
    sum = sum - Math.max(...arr) - Math.min(...arr)
    return sum
}
document.write(`<h2>${sumArr([1,3,5,9,11,12])}</h2>`)
// Question 03
function splitNum(num) {
    return Array.from(num.toString())
}
document.write(`<h2>[${splitNum(589647)}]</h2>`)
// Question 04
function recArea(x,y) {
    return x*y
}
document.write(`<h2>${recArea(5,9)}m&sup2</h2>`)
// Question 05
function revNum(n) {
    var strNumm = n.toString().split('').reverse('').join('')
    return Number(strNumm)
}
document.write(`<h2>${revNum(123)}</h2>`)
// Question 06
function countString(str,char) {
    var count = 0
    for (i in str){
        if (str[i] == char){
            count ++
        }
    }
    return count
}
document.write(`<h2>${countString('connect','c')}</h2>`)
// Quesiont 07
