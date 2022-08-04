const Blog = require("../models/BlogModel")
const slugify = require("slugify")
const User = require("../models/userModel")
/*
    @route  /blog/create
    @desc   user creates a blog
    @access Private
*/

exports.createBlog = async (req, res) => {
  // console.log(req.body)

  try {
    // console.log(req.body)
    const blog = await new Blog(req.body)
    blog.postedBy = req.user._id
    blog.slug = slugify(req.body.title).toLowerCase()
    blog.save()
    return res.status(201).json({
      message: "Blog created",
      blog,
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: err.message })
  }
}

/*
    @route  /blogs
    @desc   Fetches all blogs
    @access Public
*/

exports.fetchAllBlogs = (req, res) => {
  Blog.find({})
    .populate("postedBy", "_id image username")
    .select("_id permLink prepareTime cookTime shortDesc image title  slug description createdAt updatedAt")
    .sort({ createdAt: "desc" })
    .exec((error, data) => {
      if (error) {
        return res.json({
          error: error,
        })
      }

      res.json(data)
    })
}

/*
    @route  /blogs/:slug
    @desc   Fetch a blog  by slug
    @access Private
*/
exports.getBlogBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  if (!slug) {
    return res.status(400).json({
      message: `Cannot find blog: ${slug}`,
    })
  }

  try {
    const blog = await Blog.findOne({ slug })
    //console.log({ "found blog": blog })

    if (!blog) {
      return res.status(404).json({
        message: "No blog found",
      })
    }

    return res.status(200).json({
      success: true,
      blog,
    })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

/*
    @route  /blogs/:slug
    @desc   Delete a blog from the database
    @access Private
*/

exports.deleteBlogBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  Blog.findOneAndDelete(slug)
    .then((deletedBlog) => {
      if (deletedBlog) {
        return res.json({
          message: `Successfully deleted blog`,
        })
      } else {
        return res.json({
          message: `No blog  matches the provided query.`,
        })
      }
    })
    .catch((err) => {
      console.error(`Failed to find and delete blog: ${err}`)
      return res.status(500).json({ error: err.message })
    })
}

/*
    @route  /blogs/:slug
    @desc   Update a blog
    @access private
*/
exports.updateBlog = async (req, res) => {
  const { title, image, shortDesc, cookTime, description, permLink, prepareTime } = req.body
  const blogUpdate = {}

  if (title) {
    blogUpdate.title = title
    const slug = slugify(title).toLowerCase()
    blogUpdate.slug = slug
  }
  if (shortDesc) {
    blogUpdate.shortDesc = shortDesc
  }
  if (cookTime) {
    blogUpdate.cookTime = cookTime
  }
  if (image) {
    blogUpdate.image = image
  }

  if (description) {
    blogUpdate.description = description
  }

  if (permLink) {
    blogUpdate.permLink = permLink
  }

  if (prepareTime) {
    blogUpdate.prepareTime = prepareTime
  }

  try {
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: req.params.slug.toLowerCase() },
      { $set: blogUpdate },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    ).exec()
    return res.status(200).json({
      updatedBlog,
    })
  } catch (err) {
    //console.log("Recipe update failed ----> ", err)
    return res.status(400).json({
      err: err.message,
    })
  }
}

/** Find a blog post by user*/
exports.fetchBlogByUser = async (req, res) => {
  console.log(req.params.slug)
  User.findOne({ slug: req.params.slug }).exec(async (error, user) => {
    if (error) {
      return res.status(400).json({
        error: error,
      })
    }

    Blog.find({ postedBy: user.id })
      .populate("postedBy", "_id image username")
      .select("_id permLink prepareTime cookTime shortDesc image title  slug description createdAt updatedAt")
      .sort({ createdAt: "desc" })
      .exec((error, data) => {
        if (error) {
          return res.status(400).json({
            error: error,
          })
        }
        return res.json(data)
      })
  })
}

exports.canDeleteBlog = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  Blog.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    let authorizedUser = data.postedBy._id.toString() === req.user._id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized",
      })
    }
    next()
  })
}

exports.canUpdateBlog = (req, res, next) => {
  const slug = req.params.slug.toLowerCase()
  //console.log(req.user)
  Blog.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      })
    }

    let authorizedUser = data.postedBy._id.toString() === req.user.id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized",
      })
    }
    next()
  })
}
