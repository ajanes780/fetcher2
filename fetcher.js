var fs = require('fs');


const request = require('request');
const userInput = process.argv.slice(2)
console.log(userInput);

request(userInput[0],  (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  request('response',() =>{
    
    fs.writeFile('message.txt', body , (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
        
  });   
  
});


});

