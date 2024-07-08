let ans = document.getElementById("inp1")

// function insert(value){
//     console.log(value);
//     ans.value +=value
// }
// function result(){
//     let res = eval (ans.value)
//     ans.value=res
// }
// function cl(){
//     ans.value=""
// }

const insert=(value)=>{
    console.log(value);
    ans.value +=value
}
const result=()=>{
    let res = eval (ans.value)
    ans.value=res
}
const cl=()=>{
    ans.value=""
}