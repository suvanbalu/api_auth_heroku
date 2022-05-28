const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

const router = require("./routes/router.js");
const res = require("express/lib/response");
app.get("/", (req, res) => res.send("Hello Everyone. This is the official authentication API for PSG CSE."));
app.use("/api", router);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
