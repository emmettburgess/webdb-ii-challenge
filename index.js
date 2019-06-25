const server = require('./api/server');

const port = 9090;
server.listen(port, function() {
  console.log(`\n=== Web API listening on Port ${port} ===\n`);
});