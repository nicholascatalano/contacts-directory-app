const express = require("express");

const app = express();
const PORT = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactsDb"
);
app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
