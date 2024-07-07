//function -> 2 numbers, sum

/*function sum(a, b) {
    console.log(a + b);
}

const arrowSum =(a,b)=> {
    console.log (a+b);
};

//multiplication function

const arrowMul=(a,b)=>{
    return a*b;
};*/
const arrowSum =(a,b)=> {
   
    return a+b
};

function countVowels (str){
    let count=0;
    for (const char of str){
        if (char==="a"|| char==="e"|| char==="i" || char==="o"|| char==="u"){
            count++;

        }
    }

    let sum= arrowSum(10,count) ;
    return sum
}
const result=countVowels("shahin");
console.log("so",result);
