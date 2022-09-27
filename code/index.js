// Seneca comes as a module, invoking the function initializes the library 

var seneca = require("seneca")(); 

  

// API composition example 

// Instructing Seneca to add a function that will be invoked with a set of patterns 

// pattern 1: {role: math, cmd: sum} 

seneca.add({ role: "math", cmd: "sum" }, function (msg, respond) { 

  var sum = msg.left + msg.right; 

  respond(null, { answer: sum }); 

}); 

// pattern 2: {role: math, cmd: product} 

seneca.add({ role: "math", cmd: "product" }, function (msg, respond) { 

  var product = msg.left * msg.right; 

  respond(null, { answer: product }); 

}); 

  
// sending commands to Seneca to execute the code associated with patterns 

seneca.act({ role: "math", cmd: "sum", left: 1, right: 2 }, console.log); 

seneca.act({ role: "math", cmd: "product", left: 3, right: 4 }, console.log); 