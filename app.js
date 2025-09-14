console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// for loop(know about ending)
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
// while loop(dont know where is end)
let i=20;
while(i<=25){
    console.log(i);
    i++;
}

// game favourite movie
// const movie="PK";
// let guess=prompt("Enter your favourite movie");
// while((guess!=movie)&&(guess!="quit"))
// {
//     console.log("Wrong");
//     guess=prompt("Enter your favourite movie again ");
// }
// if(movie==guess){
// console.log("Succesfull you are right" );
// }
// else{
//     console.log("Yoy Quit");
// }



// while break neechy sab khtm
let f=1;
while(f<=5){
    if(f==3) {
        console.log("3 is here");
        break;
    }
    console.log(f);
    i++;

}

