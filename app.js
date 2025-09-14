console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// for loop
for(let i=1;i<=5;i++){
    console.log(i);
}
// reverse for loop
for(let i=5;i>=1;i--){
    console.log(i);
}
// print odd numbers 1 to 15
for(let i=1;i<=15;i++){ //i=i+2
    if(i%2!=0)
    console.log(i);

}
// print even numbers 2 to 10
for(let i=2;i<=10;i++){ //i=i+2
    if(i%2==0)
    console.log(i);

}

// infinite loops
// for(let i=1;;i++)
// {
//     console.log(i)
// }


// table
let n=10;

for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}

// nested loop
for(let i=1;i<=3;i++){
    console.log(`outerloop ${i}`)
    for(let j=1;j<=3;j++){
   
        console.log(j);
    }
}

