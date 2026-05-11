import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World! or Hello from Docker! fir bhi kiya" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// console.log(process.env.DATABASE_URL);
