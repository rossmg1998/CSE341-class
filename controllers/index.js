const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const functionName = (req, res) => {
  res.send("Ross Gardner");
};

const frontend = (req, res) => {
  jsonfile = require("../user.json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(jsonfile);
}

const mongo_getall = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const client = new MongoClient(process.env.mongoDB_URI);
  await client.connect();
  const db = client.db();
  const collection = db.collection("contacts");
  const data = collection.find();
  const result = await data.toArray();
  res.json(result);
}

const mongo_getsingle = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const id = new ObjectId(req.params.id);
  const client = new MongoClient(process.env.mongoDB_URI);
  await client.connect();
  const db = client.db();
  const collection = db.collection("contacts");
  const data = collection.find({_id: id});
  const result = await data.toArray();
  res.json(result);
}

module.exports = {
  functionName, frontend, mongo_getall, mongo_getsingle
};