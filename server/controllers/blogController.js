const Blog = require("../models/BlogModel")
const slugify = require("slugify")
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
    return res.status(200).json({
      success: true,
      blogs,
      totalBlogs,
    })
  } catch (error) {
    return res.status(500).send(error)
  }
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
  let updateBlog = req.body
  let slug = req.params.slug.toLowerCase()

  try {
    const updatedBlog = await Blog.findOneAndUpdate(slug, updateBlog, {
      new: true,
    }).exec()
    return res.status(200).json({
      updatedBlog,
    })
  } catch (err) {
    return res.status(400).json({
      err: err.message,
    })
  }
}

/** Fetch all related blog posts*/
exports.fetchRelatedBlogs = (req, res) => {
  // console.log(req.body.blog);
  let limit = req.body.limit ? parseInt(req.body.limit) : 3
  const { _id, categories } = req.body.blog

  Blog.find({ _id: { $ne: _id }, categories: { $in: categories } })
    .limit(limit)
    .populate("postedBy", "_id name username profile")
    .select("title slug postedBy createdAt updatedAt")
    .sort({ createdAt: "desc" })
    .exec((error, blogs) => {
      if (error) {
        return res.status(400).json({
          error: "Blogs not found",
        })
      }
      return res.json(blogs)
    })
}

/** Search through blog post */
exports.searchBlog = (req, res) => {
  //console.log(req.query)
  const { search } = req.query
  if (search) {
    Blog.find(
      {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { body: { $regex: search, $options: "i" } },
        ],
      },
      (error, blogs) => {
        if (error) {
          return res.status(400).json({
            error: error,
          })
        }
       return res.json(blogs)
      }
    ).select("-photo -body")
  }
}

/** Find a blog post by user*/
exports.fetchBlogByUser = (req, res) => {
  User.findOne({ username: req.params.username }).exec((error, user) => {
    if (error) {
      return res.status(400).json({
        error: error,
      })
    }
    let userId = user._id
    Blog.find({ postedBy: userId })
      .populate("categories", "_id title slug icon permalink")
      .populate("postedBy", "_id name username")
      .select("_id title slug postedBy createdAt updatedAt")
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
    let authorizedUser =
      data.postedBy._id.toString() === req.user._id.toString()
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
  Blog.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      })
    }
    let authorizedUser =
      data.postedBy._id.toString() === req.user._id.toString()
    if (!authorizedUser) {
      return res.status(400).json({
        error: "You are not authorized",
      })
    }
    next()
  })
}