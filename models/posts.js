// ========================
// DEPENDENCIES
// ========================
const express = require('express')
const mongoose = require("mongoose")

// ========================
// SCHEMA
// ========================
const postSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  likes:{type: Number, default: 0},
  date: {type: Date, default: Date.now}
});

// ========================
// MODELS
// ========================
const Posts = mongoose.model("Post", postSchema);

module.exports = Posts;
