let a=prompt("Enter Number");
let arr=[];
for(let i=1;i<=a;i++){
    let str="";
    for(let j=1;j<=i;j++){
     str=str+j+" ";
}
arr.push(str);
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}