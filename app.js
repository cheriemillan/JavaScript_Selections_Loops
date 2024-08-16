console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let j = 1; j <= 100; j++){
    if(j % 3 == 0 && j % 5 == 0){
        console.log(`FIZZBUZZ ${j}`);
    } else if (j % 3 == 0){
        console.log(`FIZZ ${j}`);
    } else if(j % 5 == 0){
        console.log(`BUZZ ${j}`);
    }
}
//Exercise 3 while-loops Section
console.log("EXERCISE 3:\n==========\n");
let number = 1;
while(number <= 100){
    if(number % 2 != 0){
        console.log(number);
    }
    number++;
}
let num = 1;
while(num <= 100){
    if(num % 3 == 0 && num % 5 == 0){
        console.log(`FIZZBUZZ ${num}`);
    } else if (num % 3 == 0){
        console.log(`FIZZ ${num}`);
    } else if(num % 5 == 0){
        console.log(`BUZZ ${num}`);
    }
    num++;
}
//Exercise 3 do while-loops Section
let k = 1;
do{
    if(k % 2 != 0){
        console.log(k);
    }
    k++;

}while(k <= 100);

let c = 1;

do{
    if(c % 3 == 0 && c % 5 == 0){
        console.log(`FIZZBUZZ ${c}`);
    } else if (c % 3 == 0){
        console.log(`FIZZ ${c}`);
    } else if(c % 5 == 0){
        console.log(`BUZZ ${c}`);
    }
    c++; 
}while(c <= 100);



