let input=document.querySelector(".inpute")
let result=document.querySelector(".result")
let del  =document.querySelector(".del")
let remove  =document.querySelector(".remove")
let equal  =document.querySelector(".equal")
let bts  =document.querySelectorAll(".bts")
let operator=document.querySelectorAll(".operator")

for(let i=0 ; i<=bts.length-1 ; i++){
    bts[i].addEventListener("click",(m)=>{
       input.value+=m.target.dataset.num;
    })
}
for(let e=0 ; e<=operator.length-1 ; e++){
    operator[e].addEventListener("click",(f)=>{
       input.value+=f.target.dataset.oper;
    })
}
del.addEventListener("click",()=>{
    input.value=null;
})
remove.addEventListener("click",()=>{
   let arr= input.value;
    input.value=arr.slice(0,-1);
})
equal.addEventListener("click",()=>{
  !isNaN(input.value)?input.value:result.value= eval (input.value);
})


