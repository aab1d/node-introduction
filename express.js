import e from "express";

const PORT = 3000;
const page = { arr: [1, 2, 3, 4], user: { name: "jake" } };
const app = e();
let items = [];

app.use(e.json());

app.get("/", (req, res) => {
  res.json(page);
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put("/items/:idx", (req, res) => {
  const index = Number(req.params.idx);
  const newItem = req.body;
  items[index] = newItem;
  res.json(newItem);
});

app.delete("/items/:idx", (req, res) => {
  const index = Number(req.params.idx);
  items.splice(index, 1);
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
