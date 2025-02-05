const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await connectDB();

    app.use("/api/products", productRoutes);
   

    app.listen(3001, () => {
      console.log("Server is listening on port 3001");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB and initialize products", err);
    process.exit(1);
  }
})();
