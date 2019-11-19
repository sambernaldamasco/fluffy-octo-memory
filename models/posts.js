// ========================
// DEPENDENCIES
// ========================
const express = require('express')
const mongoose = require("mongoose")
const moment = require('moment')

// ========================
// SCHEMA
// ========================
const postSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  likes:{type: Number, default: 0},
  date: {type: String, default: moment().format('MMMM Do YYYY, h:mm:ss a')}
});

// ========================
// MODELS
// ========================
const Posts = mongoose.model("Post", postSchema);

module.exports = Posts;
