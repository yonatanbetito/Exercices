import http from "http";
//exe1
const server = http.createServer((req, res) => {
  
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("HTTP Version:", req.httpVersion);

//exe2
  if (req.method === "POST" && req.headers["content-type"] === "application/json") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("JSON accepted");
    return;
  }

//exe3
  if (req.url === "/hello") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello from GET");
      return;
    }
    if (req.method === "POST") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello from POST");
      return;
    }
  }
  res.writeHead(400, { "Content-Type": "text/plain" });
  res.end("Unsupported request");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
