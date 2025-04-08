const mongoose = require("mongoose");

// const options = {
//   serverSelectionTimeoutMS: 5000,
// };

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.CONNECTION_STRING
      // options
    );

    console.log(
      "Database Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;

// const { MongoClient } = require("mongodb");
// // MongoClient now auto-connects so no need to store the connect()
// // promise anywhere and reference it.
// const client = new MongoClient(process.env.CONNECTION_STRING);
// module.exports.handler = async function () {
//   const databases = await client.db("admin").command({ listDatabases: 1 });
//   return {
//     statusCode: 200,
//     databases: databases,
//   };
// };
