var app = require("express");
var http = require("http").createServer(app);
const PORT2 = 8080;

http.listen(PORT2, () => {
  console.log(`listening on *:${PORT2}`);
});
