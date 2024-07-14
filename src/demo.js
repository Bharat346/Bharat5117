// let a = [
//     {"a" : 1},
//     {"b" : 2},
//     {"c" : 3},
//     {"d" : 4}
// ];
// let b = a.slice(-3)
// console.log(b);

// const a = ["js" , "Html" , "Css" , "Node js"];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//     b[i] = {text : a[i]};
// }

// console.log(a);
// console.log(b);

navigator.clipboard.writeText("Hello world")
.then(() => {
    console.log("text copy");
})
.catch((err) => {
    console.log("not copy");
})
