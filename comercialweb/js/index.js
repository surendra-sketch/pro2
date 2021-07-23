const guess = "babyboy";
let input = prompt("enter the secret code");

while (input !== guess) {
  input = prompt("enter the password code");
  if (input == guess) {
    console.log("congrates you got the secret");
    document.querySelector("#hi").innerHTML = " Congrates You got The Secret";
  }
}

//  let count =1;
//  while(count < 100){
//      console.log(count);
//      count +=2;
//  }
