let str = "simba";
let i;
    let length = str.length;
    
    for(i=0; i<=length/2; i++);
    if(str[i]===str[length-1-i]){
        console.log("no");
    }
    else{
        console.log("yes");
    }