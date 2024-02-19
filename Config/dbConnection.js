const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://buttabdulhannan708:QoJcO5vDBilM7D2w@cluster0.tqpzeir.mongodb.net/SHOPSWIFTLY?retryWrites=true&w=majority"
    );
    //console.log("Database:", connect.connection.host, connect.connection.name);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
module.exports = dbConnection;
