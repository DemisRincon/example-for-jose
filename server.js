import axios from "axios";
import express, { json, urlencoded } from "express";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/api/person", async (req, res) => {
  const responseExtrernal = await axios.get(
    "https://api.mercadolibre.com/sites/MLA/search?q=:xiaomi"
  );
  res.status(200).json({
    message: "is working",
    response: responseExtrernal.data,
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
