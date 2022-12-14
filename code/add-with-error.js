var seneca = require("seneca")(); 

seneca.add({ role: "math", cmd: "sum" }, function (msg, respond) { 

  var sum = msg.left + msg.right; 

  respond(null, { answer: sum }); 

}); 

  

seneca.add({ role: "math", cmd: "product" }, function (msg, respond) { 

  var product = msg.left * msg.right; 

  respond(null, { answer: product }); 

}); 

  

seneca.act({ role: "math", cmd: "sum", left: 1, right: 2 }, 

  // Instead of dumping everything into the console, process the response from 

  // Seneca, which is a callback where the first parameter is the error, 

  // and the second parameter is the data coming back from the microservice. 

  function (err, data) { 

  if (err) { 

    return console.error(err); 

  } 

  console.log(data); 

}); 

seneca.act({ role: "math", cmd: "product", left: 3, right: 4 }, console.log);