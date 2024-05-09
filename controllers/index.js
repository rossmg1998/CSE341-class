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
  console.log(req.params.id);
  const id = new ObjectId(req.params.id);
  const client = new MongoClient(process.env.mongoDB_URI);
  await client.connect();
  const db = client.db();
  const collection = db.collection("contacts");
  const data = collection.find({_id: id});
  const result = await data.toArray();
  res.json(result);
}

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const mongodb = new MongoClient(process.env.mongoDB_URI);
  await mongodb.connect();
  const response = await mongodb.db().collection("contacts").insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || "Some error occurred while creating the contact.");
  }
};

const updateContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const mongodb = new MongoClient(process.env.mongoDB_URI);
  await mongodb.connect();
  const response = await mongodb.db().collection("contacts").replaceOne({_id: id}, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while updating the contact.");
  }
};

const deleteContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const mongodb = new MongoClient(process.env.mongoDB_URI);
  await mongodb.connect();
  const response = await mongodb.db().collection("contacts").deleteOne({_id: id});
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while deleting the contact.");
  }
};

module.exports = {
  functionName, 
  frontend, 
  mongo_getall, 
  mongo_getsingle,
  createContact,
  updateContact,
  deleteContact
};