// Function that returns a promise to simulate fetching data
function fetchData(condition) {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (like fetching data from a server)
      setTimeout(() => {
        if (condition) {
          const data = ['apple', 'banana', 'cherry'];
          // Assuming the operation was successful, so we'll resolve with the data
          resolve(data);
        } else {
          // Simulating an error condition
          reject('Failed to fetch data.');
        }
      }, 2000); // Resolves after 2 seconds
    });
  }
  
  // Using async/await with arrow functions
  const fetchDataAsync = async (condition) => {
    try {
      const data = await fetchData(condition);
      console.log('Data received:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call fetchDataAsync with different conditions
  fetchDataAsync(true); // Resolves after 2 seconds
  fetchDataAsync(false); // Rejects immediately
  