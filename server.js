import { createServer } from "http";
const PORT = 3000;
const page = { arr: [1, 2, 3, 4], user: { name: "jake" } };
const items = [];
const server = createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(page));
    res.end();
  } else if (req.url == "/items" && req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const newItem = JSON.parse(body);
      items.push(newItem);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newItem));
    });
  } else if (req.url == "/items" && req.method == "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  } else if (req.url.startsWith("/items/") && req.method == "PUT") {
    const idx = Number(req.url.split("/")[2]);
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const updates = JSON.parse(body);
      items[idx] = updates;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(items[idx]));
    });
  } else if (req.url.startsWith("/items/") && req.method == "DELETE") {
    const idx = Number(req.url.split("/")[2]);
    items.splice(idx, 1);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  }
});
server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
