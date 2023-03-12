// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"]; 
const messages = [];
function writeCards(name, event){
    
    for (let i =0; i<name.length; i++) 
 {
   
    let message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
 messages.push(message);
}
  return messages;
 
}

function countDown (number){
    while (number >=0){
        console.log(number);
        number --;
    }
}

