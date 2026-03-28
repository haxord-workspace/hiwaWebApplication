const express = require("express");
const cors = require("cors");
const contactRouter = require("./contact");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api", contactRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Contact API server running at http://localhost:${PORT}`);
});
