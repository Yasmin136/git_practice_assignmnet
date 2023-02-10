let n = 13;
factor = 0;

for(let i=1; i<=n; i++){
if(n%i==0){
factor++;
}
}
if(factor<=2){
console.log("yes");
}
else{
console.log("no");
}
