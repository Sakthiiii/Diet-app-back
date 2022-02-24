const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DB_URL);

const mongo = {
  db: null,
  users: null,
  userinfo: null,

  async connect() {
    await client.connect();
    

    this.db = client.db(process.env.DB_NAME);
    this.users = this.db.collection("users");
    this.userinfo = this.db.collection("userinfo");
    console.log("db connected successfully");
  },
};

module.exports = mongo;
