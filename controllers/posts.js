// ========================
// DEPENDENCIES
// ========================
const express = require("express")
const Posts = require('../models/posts.js')
const router = express.Router()
const seed = require('../models/seed.js')

// ========================
// ROUTES
// ========================

router.get("/", (req, res) => {
  Posts.find({}, (error, foundPosts) => {
    res.json(foundPosts)
  })
})

router.post('/', (req, res) => {
  Posts.create(req.body, (error, createdPost) => {
    res.json(createdPost)
  })
})

router.delete('/:id', (req, res) => {
  Posts.findByIdAndRemove(req.params.id, (error, deletedPost) => {
    res.json(deletedPost)
  })
})

router.put('/:id', (req, res) => {
  Posts.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedPost) => {
    res.json(updatedPost)
  })
})
module.exports = router



// ====== CURL testing
//curl -X POST -H "Content-Type: application/json" -d '{ "author":"sam","title":"test", "description":"testing" }' http://localhost:3000/posts
