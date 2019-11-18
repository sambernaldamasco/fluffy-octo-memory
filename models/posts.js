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
  description: String
});

// ========================
// MODELS
// ========================
const Posts = mongoose.model("Post", postSchema);

module.exports = Posts;
