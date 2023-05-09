//1.Write an asynchronous function that accepts a message string and a delay time in
//milliseconds.The function should log the message to the console after the specified delay time.

function walk(){
    console.log("Milcah loves taking walks in the woods");
}
setTimeout(walk, 5000)

//2.You have an array of user IDs and a function getUserData(id) that returns
//a Promisewith user data when given a user ID. Write an asynchronous function
//that fetches and logs the data for each user ID one by one, in sequence.




//3.You have an asynchronous function performTask() that returns a Promise.
//The Promise resolves if the task is successful and rejects if there's an error.
//Write a function that calls performTask() and logs a custom success message if the 
//task is successful, and a custom error message if there's an error.

let runTask = true;
let performTask = new Perform(function(resolve, reject){
  if(runTask){
    resolve("She performed her assessment");
  }
  else{
    reject("She performed poorly in her assessment");
  }
}).then(()=>{console.log('Task completed successfully!')})
  .catch(()=>{console.log('Error occurred while performing task:', error)})
  .finally(()=>{console.log('Successful!')});
  console.log({performTask});





