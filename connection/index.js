const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://ps:ps.achiver@pscluster.w34oqdy.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("database connected"))
  .catch((e) => console.log("error: ", e));
