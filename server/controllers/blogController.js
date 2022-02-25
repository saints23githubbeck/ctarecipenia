const mongoose = require("mongoose")
const Blog = require("../models/BlogModel")

/*
    @route  /blog/create
    @desc   user creates a blog
    @access Private
*/

exports.createBlog = async (req, res) => {
  // console.log(req.body)
  // res.end("Blog created")
  try {
    // console.log(req.body)
    const blog = await new Blog(req.body).save()
    res.status(201).json({
      message: "Blog created",
      blog,
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: err.message })
  }
}

/*
    @route  /blogs
    @desc   Fetches all blogs
    @access Public
*/
exports.getBlogs = async (req, res) => {
  //console.log("fetch all blogs");
  try {
    let totalBlogs = await Blog.countDocuments()
    const blogs = await Blog.find({})
      .sort([["createdAt", "asc"]])
      .exec()
    if (!blogs) {
      return res.status(400).json({ error: [{ message: "Blogs not found" }] })
    }
    res.status(200).json({
      success: true,
      blogs,
      totalBlogs,
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

/*
    @route  /blogs/:blogId
    @desc   Fetch a blog from by ID
    @access Private
*/
exports.getBlogById = async (req, res) => {
  const blogId = req.params.blogId
  const checkedId =
    mongoose.isValidObjectId(blogId) /* will return true/false */
  //console.log(checkedId)
  if (!checkedId) {
    res.status(400).json({
      message: `Cannot find blog with blog ID: ${blogId}`,
    })
  }

  try {
    let blog = await Blog.findById(blogId)
    //console.log({ "found blog": blog })

    if (!blog) {
      return res.status(404).json({
        message: "No blog found",
      })
    }
    res.status(200).json({
      success: true,
      blog,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

/*
    @route  /blogs/:blogId
    @desc   Delete a blog from the database
    @access Private
*/

exports.deleteBlogById = async (req, res) => {
  const blogId = req.params.blogId
  Blog.findOneAndDelete({ _id: blogId })
    .then((deletedBlog) => {
      if (deletedBlog) {
        res.json({
          message: `Successfully deleted blog`,
        })
      } else {
        res.json({
          message: `No blog with id ${blogId} matches the provided query.`,
        })
      }
      return deletedBlog
    })
    .catch((err) => console.error(`Failed to find and delete blog: ${err}`))
}

/*
    @route  /blogs/:blogId
    @desc   Update a blog
    @access private
*/

exports.updateBlog = async (req, res) => {
  let updateBlog = req.body
  let blogId = req.params.blogId
  const checkedId = mongoose.isValidObjectId(blogId)

  try {
    if (!checkedId) {
      res.json({ message: `Cannot find blog with id ${blogId}.` })
    }
    const updatedBlog = await Blog.findOneAndUpdate(blogId, updateBlog, {
      new: true,
    }).exec()
    res.status(200).json({
      updatedBlog,
    })
  } catch (err) {
    res.status(400).json({
      err: err.message,
    })
  }
}
