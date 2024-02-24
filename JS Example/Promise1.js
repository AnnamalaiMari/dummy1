// Function that returns a promise to simulate fetching data
const fetchData = (condition) => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (like fetching data from a server)
      setTimeout(() => {
        if (condition) {
          //const data='';
          const data = ['apple', 'banana', 'cherry'];
          // Assuming the operation was successful, so we'll resolve with the data
          resolve(data);
        } else {
          // Simulating an error condition
          reject('Failed to fetch data.');
        }
      }, 2000); // Resolves after 2 seconds
    });
  };
  
  // Arrow function to handle success
  const onSuccess = (data) => {
    console.log('Data received:', data);
  };
  
  // Arrow function to handle error
  const onError = (error) => {
    console.error('Error fetching data:', error);
  };
  
  // Using the fetchData function with arrow functions
  fetchData(true)
    .then(onSuccess)
    .catch(onError);
  
  // Using the fetchData function with a false condition
  fetchData(false)
    .then(onSuccess)
    .catch(onError);
  