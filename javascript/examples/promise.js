// // Function to fetch data from a JSON placeholder API
function fetchData() {
    return new Promise(function(resolve, reject) {
      // Simulate fetching data from an API
      setTimeout(function() {
        const data = {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        };
        resolve(data);
      }, 3000); // Simulate a 1-second delay
    });
  }
  
//   // Using the Promise to fetch data and display it
  fetchData()
    .then(function(data) {
      console.log("Fetched Data:");
      console.log("User ID: " + data.userId);
      console.log("Title: " + data.title);
      console.log("Completed: " + data.completed);
    })
    .catch(function(error) {
      console.error("Error fetching data: " + error);
    });
  

function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const random = Math.random();
        if (random < 0.7) {
          resolve("Data successfully fetched: " + random);
        } else {
          reject("Failed to fetch data: " + random);
        }
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  // Using the Promise
  fetchData()
    .then(function(result) {
      console.log(result); // Fulfilled: Data successfully fetched: <random number>
    })
    .catch(function(error) {
      console.error(error); // Rejected: Failed to fetch data: <random number>
    });
  

const promise = new Promise(resolve => {
    setTimeout(() => {
    resolve("I'm a Promise!");
    }, 5000);
    }, reject => {
        console.log("i got rejected")
    });
    promise.then(value => console.log(value));