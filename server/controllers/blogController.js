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
    @route  /blogs/:slug
    @desc   Fetch a blog  by slug
    @access Private
*/
exports.getBlogBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  if (!slug) {
    res.status(400).json({
      message: `Cannot find blog: ${slug}`,
    })
  }

  try {
    const blog = await Blog.findOne(slug)
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
    @route  /blogs/:slug
    @desc   Delete a blog from the database
    @access Private
*/

exports.deleteBlogBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase()

  Blog.findOneAndDelete(slug)
    .then((deletedBlog) => {
      if (deletedBlog) {
        res.json({
          message: `Successfully deleted blog`,
        })
      } else {
        res.json({
          message: `No blog  matches the provided query.`,
        })
      }
      return deletedBlog
    })
    .catch((err) => console.error(`Failed to find and delete blog: ${err}`))
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
    res.status(200).json({
      updatedBlog,
    })
  } catch (err) {
    res.status(400).json({
      err: err.message,
    })
  }
}


/** Fetch all related blog posts*/
exports.fetchRelatedBlogs = (req, res) => {
	// console.log(req.body.blog);
	let limit = req.body.limit ? parseInt(req.body.limit) : 3
	const {_id, categories} = req.body.blog

	Blog.find({_id: {$ne: _id}, categories: {$in: categories}})
		.limit(limit)
		.populate("postedBy", "_id name username profile")
		.select("title slug postedBy createdAt updatedAt")
		.sort({createdAt: "desc"})
		.exec((error, blogs) => {
			if (error) {
				return res.status(400).json({
					error: "Blogs not found",
				})
			}
			res.json(blogs)
		})
}

/** Search through blog post */
exports.searchBlog = (req, res) => {
	//console.log(req.query)
	const {search} = req.query
	if (search) {
		Blog.find(
			{
				$or: [{title: {$regex: search, $options: "i"}}, {body: {$regex: search, $options: "i"}}],
			},
			(error, blogs) => {
				if (error) {
					return res.status(400).json({
						error: error,
					})
				}
				res.json(blogs)
			}
		).select("-photo -body")
	}
}


/** Find a blog post by user*/
exports.fetchBlogByUser = (req, res) => {
	User.findOne({username: req.params.username}).exec((error, user) => {
		if (error) {
			return res.status(400).json({
				error: error,
			})
		}
		let userId = user._id
		Blog.find({postedBy: userId})
			.populate("categories", "_id title slug icon permalink")
			.populate("postedBy", "_id name username")
			.select("_id title slug postedBy createdAt updatedAt")
			.sort({createdAt: "desc"})
			.exec((error, data) => {
				if (error) {
					return res.status(400).json({
						error: error,
					})
				}
				res.json(data)
			})
	})
}