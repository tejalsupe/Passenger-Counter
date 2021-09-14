let count = 0;

function increment(){
   count++;
  document.getElementById("countNo").textContent = count;//Document Object Model
}
function save(){
    let data = count + " - ";
    document.getElementById("saveData").textContent+=data;//+= -> becoz we don't want to delete the previous data
    count=0;
    document.getElementById("countNo").textContent=count;
}

// let namee = "Tejal";
// let greeting="Hey, My name is ";
// let myGreeting = greeting + namee;
// console.log(myGreeting);  
// myGreeting+=" 😄"; 
// console.log(myGreeting)