const mongoose = require("mongoose");

//console.log(process.env.Db_Url)

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://buttabdulhannan708:QoJcO5vDBilM7D2w@cluster0.tqpzeir.mongodb.net/SHOPSWIFTLY?retryWrites=true&w=majority"
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
module.exports = dbConnection;
