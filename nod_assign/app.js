const express = require("express");
const app = express();
const mathRoutes = require("./routes/mathRoutes");
const loggerMiddleware = require("./middleware/logger");

app.use(express.json());
app.use(loggerMiddleware);

app.use("/api", mathRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
