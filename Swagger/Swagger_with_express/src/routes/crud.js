const express = require("express");
const router = express.Router();


let posts = [];
let idMax = 1;

router.get("/", (req, res) => {
  console.log(posts);
  res.status(200).send(posts);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) return res.status(404).send({ message: "Post not found" });

  res.status(200).send(post);
});

router.post("/", (req, res) => {
  // const { title, content } = req.body;
  const post = {
    id: idMax++,
    title: req.body.title,
    content: req.body.content,
  };

  if (!post.title || !post.content)
    return res.status(400).send({ message: "Title and content are required" });

  posts.push(post);
  res.status(201).json({
    message: "Post created successfully",
    post: post,
  });
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) return res.status(404).send({ message: "Post not found" });

  post.title = req.body.title;
  post.content = req.body.content;

  res.status(200).json({
    message: "Post updated successfully",
    post: post,
  });
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) return res.status(404).send({ message: "Post not found" });

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json({ message: "Post deleted successfully" });
});


module.exports = router